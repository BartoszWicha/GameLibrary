const mongoose = require('mongoose');
const Accounts = mongoose.model('Accounts');

const Register = async function (req, res) {
    try{
        if (req.body){
            const Email = req.body.Email;
            const Password = req.body.Password;
            const ConfirmPassword = req.body.ConfirmPassword;
            const Phonenum = req.body.Phonenum;
            const Username = req.body.Username;

            console.log(req.body);

            if (!Email || !Password || !ConfirmPassword || !Phonenum || !Username) {
                return res.status(400).json({ message: 'All fields are required.' });
            }
        
        
        if (Password !== ConfirmPassword) {
            return res.status(400).json({ message: 'Passwords do not match.' });
        }
        const existingUser = await Accounts.findOne({ Email: Email });
        if (existingUser) {
        return res.status(400).json({ message: 'Email is already registered.' });
        }
        const newAccount = new Accounts({
            Email: Email,
            Password: Password,
            Username: Username,
            PhoneNum: Phonenum
        });
        await newAccount.save();
        res.status(201).json({ message: 'Registration successful!' });
    }
    }
    
 catch (err) {
        console.error('Error during registration:', err);
        res.status(500).json({ message: 'Internal server error.' });
    }
};

module.exports = {
    Register
};