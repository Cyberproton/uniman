"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const dotenv = tslib_1.__importStar(require("dotenv"));
const express_1 = tslib_1.__importDefault(require("express"));
dotenv.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.send('Hello Worl!');
});
app.listen(port, () => {
    return console.log(`http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map