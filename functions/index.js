const functions = require('firebase-functions')

const admin = require('firebase-admin')
admin.initializeApp()

const db = admin.firestore()

exports.addLike = functions
    .region('us-east4')
    .firestore.document('/posts/{postId}/likes/{userId}')
    .onCreate((snap, context) => {
        return db
            .collection('posts')
            .doc(context.params.postId)
            .update({
                numLikes: admin.firestore.FieldValue.increment(1),
            })
    })

exports.deleteLike = functions
    .region('us-east4')
    .firestore.document('/posts/{postId}/likes/{userId}')
    .onDelete((snap, context) => {
        return db
            .collection('posts')
            .doc(context.params.postId)
            .update({
                numLikes: admin.firestore.FieldValue.increment(-1),
            })
    })

exports.addRetweet = functions
    .region('us-east4')
    .firestore.document('/posts/{postId}/retweets/{userId}')
    .onCreate((snap, context) => {
        return db
            .collection('posts')
            .doc(context.params.postId)
            .update({
                numRetweets: admin.firestore.FieldValue.increment(1),
            })
    })

exports.deleteRetweet = functions
    .region('us-east4')
    .firestore.document('/posts/{postId}/retweets/{userId}')
    .onDelete((snap, context) => {
        return db
            .collection('posts')
            .doc(context.params.postId)
            .update({
                numRetweets: admin.firestore.FieldValue.increment(-1),
            })
    })
