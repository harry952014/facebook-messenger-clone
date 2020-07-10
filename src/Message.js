import React, { forwardRef } from 'react'
import { Card, CardContent, Typography} from '@material-ui/core';
import './Message.css'

const Message = forwardRef(({ username, message }, ref) => {
    const isUser = username === message.username;
    console.log(message.username + " " + message.message)
    return (
        <div ref={ref} className={`message ${isUser && 'message__user'}`}>
            <Card className={isUser ? "message__userCard" : `message__guestCard`}>
                <CardContent>
                    <Typography 
                    color="initial"
                    variant="h5"
                    component="h2"
                    >
                        {!isUser && `${message.username || "Unknown User"}: ` } {message.message} 
                    </Typography>
                    {/* <br></br> <Typography>{message.timestamp}</Typography> */}
                </CardContent>
            </Card>
        </div>
    )
})

export default Message
