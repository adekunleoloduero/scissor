"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showShortenUrlPage = exports.showUserDashboard = exports.showSignInPage = exports.showSignUpPage = void 0;
const users_model_1 = require("../models/users.model");
const urls_model_1 = require("../models/urls.model");
//Auth pages controllers
const showSignUpPage = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const authenticated = req.user;
        try {
            if (authenticated) {
                return res.redirect('/pages/dashboard');
            }
            else {
                res.status(200).render('signUp', {
                    pageTitle: 'Signup'
                });
            }
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    });
};
exports.showSignUpPage = showSignUpPage;
const showSignInPage = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const authenticated = req.user;
        try {
            if (authenticated) {
                return res.redirect('/pages/dashboard');
            }
            else {
                res.status(200).render('signIn', {
                    pageTitle: 'Signin'
                });
            }
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    });
};
exports.showSignInPage = showSignInPage;
//Users pages controllers
const showUserDashboard = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.user.id;
        try {
            const user = yield users_model_1.User.findById(id);
            //Get total number of URLs created by the user
            const urlsCount = yield urls_model_1.Url.count({ userId: id });
            res.status(200).render('dashboard', {
                pageTitle: "Dashboard",
                user,
                urlsCount
            });
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    });
};
exports.showUserDashboard = showUserDashboard;
//Url pages controllers
const showShortenUrlPage = function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return res.status(200).render('shortenUrl');
        }
        catch (error) {
            console.log(error);
            next(error);
        }
    });
};
exports.showShortenUrlPage = showShortenUrlPage;
