const appsyncUrl = 'https://mrarkk5vlfcyzavqfjdjsi22ei.appsync-api.us-east-1.amazonaws.com/graphql';
const apiKey = 'da2-yuzlmnhgajamndvgnmqs2nrjda';

const { request } = require('./appsyncRequest');
const { listTransactions } = require('./graphql/queries');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    try {
        const result = await request({
            query: listTransactions,
            operationName: 'ListTransactions',
        }, appsyncUrl, apiKey);

        console.log(result);

        const balance = result.data.listTransactions.items.reduce(
            (balance, {amount}) => (balance + amount), 0);

        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            }, 
            body: JSON.stringify({
                balance,
            }),
        };
    } catch(error) {
        console.log(error);
        return {
            statusCode: 503,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            }, 
        };
    }
};
