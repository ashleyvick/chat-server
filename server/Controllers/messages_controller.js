var id = 0
var messages = [];

module.exports = {
    create: (req, res) => {
        let { text, time } = req.body
        let newMessage = {
            text,
            time, 
            id
        };
        id++
        messages.push(newMessage)
        res.status(200).json(messages)
    },
    read: (req, res) => {
        res.status(200).json(messages)
    },
    update: (req, res) => {
        const { id } = req.params
        const {text, time } = req.body
        const index = messages.findIndex((message) => message.id === +id);
        messages[index] = {
            text,
            time,
            id
        }
        res.status(200).json(messages)
    },
    delete: (req, res) => {
        const {id} = req.params;
        messageID = messages.findIndex((message) => message.id === +id);
        messages.splice(messageID,1)
        res.status(200).json(messages)
    }
}