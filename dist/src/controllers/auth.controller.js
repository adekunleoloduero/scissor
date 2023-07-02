"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logOut = exports.signIn = exports.signUp = void 0;
const users_model_1 = require("../models/users.model");
const urls_model_1 = require("../models/urls.model");
const index_1 = require("../configs/index");
const jwt = __importStar(require("jsonwebtoken"));
const signUp = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email } = req.body;
        try {
            //Check if user is already registered
            const existingUser = yield users_model_1.User.findOne({ email });
            if (existingUser) {
                if (req.header("Content-type") == "application/json") {
                    return res.status(400).json('This email is already registered.');
                }
                else {
                    return res.status(400).render('signUp', {
                        pageTitle: 'Signup',
                        message: 'This email is already registered.'
                    });
                }
            }
            const user = yield users_model_1.User.create(req.body);
            const _a = user._doc, { password } = _a, others = __rest(_a, ["password"]);
            if (req.header("Content-type") == "application/json") {
                return res.status(201).json({ user: others });
            }
            else {
                return res.render('signupConfirmed', {
                    pagetTitle: 'signupConfirmed'
                });
            }
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    });
};
exports.signUp = signUp;
const signIn = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield users_model_1.User.findOne({ email: req.body.email });
            if (!user) {
                if (req.header("Content-type") == "application/json") {
                    return res.status(400).json("Invalid email");
                }
                else {
                    return res.status(400).render('signIn', {
                        pageTitle: 'Signin',
                        message: 'Invalid email'
                    });
                }
            }
            //Ckeck password correctness
            const validPassword = yield user.isValidPassword(req.body.password);
            if (!validPassword) {
                if (req.header("Content-type") == "application/json") {
                    return res.status(400).json("Invalid password");
                }
                else {
                    return res.status(400).render('signUp', {
                        pageTitle: 'Signup',
                        message: 'Invalid password'
                    });
                }
            }
            //Get total number of URLs created by the user
            const urlsCount = yield urls_model_1.Url.count({ userId: user._id });
            const _a = user._doc, { password } = _a, others = __rest(_a, ["password"]);
            const token = jwt.sign({ id: user._id, email: user.email }, index_1.config.JWT_SECRET);
            if (req.header("Content-type") == "application/json") {
                return res.status(200)
                    .cookie('access_token', token, {
                    httpOnly: true,
                    // expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
                }).json({ user: others, token });
            }
            else {
                return res.status(200)
                    .cookie('access_token', token, {
                    httpOnly: true,
                    // expires: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
                }).render('dashboard', {
                    pagetTitle: 'Dashboard',
                    user,
                    urlsCount
                });
            }
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    });
};
exports.signIn = signIn;
const logOut = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        return res.clearCookie('access_token')
            .status(200)
            .redirect('/');
        //Return the home page
    });
};
exports.logOut = logOut;
