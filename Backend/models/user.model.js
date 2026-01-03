const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');  

const userSchema = new userSchema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'Invalid first name'],
        },

        lastname : {
            type: String,
            minlength: [3, 'Invalid last name'],
        }
    },

    email:{
        type: String,
        required: true,
        unique: true,
        minlength: [10, 'Invalid email address'],
    },

    password: {
        type: String,
        required: true,
        select: false,
        minlength: [6, 'Password must be at least 6 characters long'],
    }
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({ _id: this._id},process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashpassword = async function(password){
    return await bcrypt.hash(passsword, 10);
}

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;