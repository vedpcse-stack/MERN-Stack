exports.pageNotFound = (req,res) => {
    res.render('404' , {pageTitle : "Page not found"})
}