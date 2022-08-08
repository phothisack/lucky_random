

const ifNotLoggedIn = (req, res, next)=>{
    if(!req.session.isLoggedIn){
        return res.render('login_register');

    }
    next();
}