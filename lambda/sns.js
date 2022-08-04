const AWS = require('aws-sdk')

exports.handler = async (event) => {
    try {
        const result = await publishToSNS("WhEn SoCiAlLy AwKwArD 🔎 https://socially-awkward.s3.eu-north-1.amazonaws.com/index.html")
    } catch (e) {
        console.error(e)
    }
};


const publishToSNS = async(message) => {
    
    const params = {
        Message: JSON.stringify(message),
        TopicArn: "arn:aws:sns:eu-north-1:235920682125:socially-awkward-topic",
        Subject: "SNS Test from Lambda",
        MessageAttributes: {
            "source": {
                "DataType": "String",
                "StringValue": "s1"
            }
        }
    }
    return new Promise((resolve, reject) => {
        const sns = new AWS.SNS();
        sns.publish(params, function(err, data){
            if(err){
                reject(err)
            } else {
                resolve(data)
            }
        })
    });
}