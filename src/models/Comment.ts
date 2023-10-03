const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    text: String,
    author: String, // или ссылку на пользователя, если есть аутентификация
    articleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }, // Ссылка на статью
    createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Comment || mongoose.model('Comment', commentSchema);