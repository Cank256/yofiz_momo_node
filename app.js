const server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
const server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
server.listen(server_port, server_ip_address, () => {
    console.log("Hello, your Listening on " + server_ip_address + ", Port " + server_port);
});
