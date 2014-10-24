var express = require('express'),
    mongoose = require('mongoose'),
    config = require('js-tweaker')()();

var app = express();

app.use(function (req, res, next) {
    console.log(Date.now() +' - '+ req.method +':'+ req.url);
    next();
});
app.use(express.static('public'));

mongoose.connect('mongodb://localhost/eric-leah');

var ArticleSchema = mongoose.Schema({
    title: String,
    author: mongoose.Schema.Types.ObjectId,
    content: String,
    images: [ mongoose.Schema.Types.ObjectId ],
    created_ts: { type: Date, default: Date.now },
    updated_ts: { type: Date, default: Date.now },
    tags: [String]
});

var ImageSchema = mongoose.Schema({
    filename: String,
    author: mongoose.Schema.Types.ObjectId,
    description: String,
    created_ts: { type: Date, default: Date.now },
    updated_ts: { type: Date, default: Date.now },
    tags: [String]
});

var UserSchema = mongoose.Schema({
    username: String,
    name: String,
    avatar: String,
    email: String,
    created_ts: { type: Date, default: Date.now },
    updated_ts: { type: Date, default: Date.now },
    type: String,
});

var Article = mongoose.model('Article', ArticleSchema);
var Image = mongoose.model('Image', ImageSchema);
var User = mongoose.model('User', UserSchema);

app.route('/api/1/article')
    .all(function (req, res, next) {
        next();
    })
    .get(function (req, res, next) {
        Article.find().exec(function (err, result) {
            if (err) {
                console.log(err);
                res.status(404).end();
            }
            else {
                res.send(result);
            }
        });
    })
    .post(function (req, res, next) {
        var article = new Article(req.body);

        article.save(function (err) {
            if (err) {
                console.log(err);
                res.status(500).end();
            }
            else {
                res.status(201).send(article);
            }
        });
    });

app.route('/api/1/article/:id')
    .all(function (req, res, next) {
        next();
    })
    .get(function (req, res, next) {
        Article.findById(req.params.id, function (err, model) {
            if (err) {
                console.log(err);
                res.status(404).end();
            }
            else {
                res.send(model);
            }
        });
    })
    .patch(function (req, res, next) {
        Article.findById(req.params.id, function (err, model) {
            if (err) {
                console.log(err);
                res.status(404).end();
            }
            else {
                model.save(req.body, function (err) {
                    if (err) {
                        console.log(err);
                        res.status(500).end();
                    }
                    else {
                        res.send(result);
                    }
                });
            }
        });
    })
    .delete(function (req, res, next) {
        Article.findById(req.params.id, function (err, model) {
            if (err) {
                console.log(err);
                res.status(404).end();
            }
            else {
                model.delete(function (err) {
                    if (err) {
                        console.log(err);
                        res.status(500).end();
                    }
                    else {
                        res.status(204).end();
                    }
                });
            }
        });
    });

app.route('/api/1/user')
    .all(function (req, res, next) {
        next();
    })
    .get(function (req, res, next) {
    })
    .post(function (req, res, next) {
    })
    .patch(function (req, res, next) {
    });

app.route('/api/1/image')
    .all(function (req, res, next) {
        next();
    })
    .get(function (req, res, next) {
    })
    .post(function (req, res, next) {
    })
    .patch(function (req, res, next) {
    });

app.listen(config.app.port);

