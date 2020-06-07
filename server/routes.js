const express = require('express');
const router = express.Router();
const Contact = require('./models/contact');

router.get('/', async (req, res) => {
    try{
        const all_data = await Contact.find({})
        res.send(all_data);
    } catch {
        res.json({message: "The Data is problametic"});
    }
});

router.post('/new', async (req, res) => {
    const new_contact = new Contact({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        isActivePhoneNumber: req.body.isActive
    })
    try{
        console.log(req.body.firstName);
        await new_contact.save();
        res.json({message: "Successfully Completed"})
    } catch(error) {
        //res.send("Error Creating Contact")
        console.log("Error Creating Contact")
        console.error(error)
    }
});

router.put('/edit/:id', async (req, res) => {
    let contact_update
    let prev_data = []
    try{
        contact_update = await Contact.findById(req.params.id)
        prev_data.firstName = contact_update.firstName
        prev_data.lastName = contact_update.lastName
        prev_data.email = contact_update.email
        prev_data.phoneNumber = contact_update.phoneNumber
        prev_data.isActivePhoneNumber = contact_update.isActivePhoneNumber
        
        if(req.body.firstName != '' && req.body.firstName != null){
            contact_update.firstName = req.body.firstName
        } else {
            contact_update.firstName = prev_data.firstName
        }
        if(req.body.lastName != '' && req.body.lastName != null){
            contact_update.lastName = req.body.lastName
        } else {
            contact_update.lastName = prev_data.lastName
        }
        if(req.body.email != '' && req.body.email != null){
            contact_update.email = req.body.email
        } else {
            contact_update.email = prev_data.email
        }
        if(req.body.phoneNumber != '' && req.body.phoneNumber != null){
            contact_update.phoneNumber = req.body.phoneNumber
        } else {
            contact_update.phoneNumber = prev_data.phoneNumber
        }
        if(req.body.isActive != false){
            contact_update.isActivePhoneNumber = req.body.isActive
        } else {
            contact_update.isActivePhoneNumber = prev_data.isActivePhoneNumber
        }

        await contact_update.save()
        res.send({message: "Sucessfully Updated"})
    } catch(error) {
        if(contact_update != null){
            res.send({message: "problem is in saving after update"})
            console.log(contact_update.firstName)
            console.log(error)
        } else {
            res.send({mesage: "problem is in contact data"})
        }
    }
});

router.delete('/delete/:id', async (req, res) => {
    let contact
    try{
        contact = await Contact.findById(req.params.id)
        await contact.remove()
        res.send({message: "Sucessfully Deleted"})
    } catch (error) {
        if(contact != null){
            res.send({message: "Error in deleting function"})
        } else{
            res.send({message: "Error in somethind else Deleting"})
        }
    }
})

module.exports = router;