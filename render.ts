import { createServer, IncomingMessage, ServerResponse } from 'http';

const port = 3000;
const id = "hello"
const tag:string = '<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000000;"></canvas>'


const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple HTML Renderer</title>
</head>
<body>
    <div id="app">
        <!--<canvas id="gameCanvas" width="800" height="600"></canvas>-->
        ${tag}
    </div>
</body>
</html>
`;

const requestListener = (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlContent);
};

const server = createServer(requestListener);

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
