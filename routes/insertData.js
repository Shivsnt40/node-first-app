var User = require('../schema/user')

function insert(req, res) {
    //logic to insert data into database req.body
    User.create(req.body, function(err, result) {
        if(!err) {
            res.json({success: true, result: result})
        } else {
            res.json({success: false, err: err})
        }
    })
}

function search(req, res) {
    //logic to insert data into database req.body
    User.find({email: req.body.email}, function(err, result) {
        if(!err) {
            console.log(result)
            res.json({success: true, result: result})
        } else {
            res.json({success: false, err: err})
        }
    })
}

module.exports = {
    insert, search
}