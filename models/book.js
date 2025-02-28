const mongoose = require('mongoose')
const bookSchema = mongoose.Schema(
  {
    tensach:{type: String, required: true, unique: true },
    giasach:{type: String, required: true},
    danhgia:{type: String},
    tacgia:{ type: mongoose.Schema.Types.ObjectId, ref: 'Publisher' },
    loaisach:{ type:[String] },
    part:{ type:[String] },
    namxuatban:{ type: Date },
    ngonngu:{ type: String, default:'vietnamese' },
    sotrang:{ type: Number, default: 0},
    mota:{ type: String },
    category:{
      type: String,
      enum: ['romance', 'horror', 'children','mystery','travel','cookbook','thriller', 'other'],
      default: 'other'
    },
    tieude:{type: String}
    
  },
  { timestamps: true }
)
const Book = mongoose.model('Book',bookSchema);
module.exports = Book;