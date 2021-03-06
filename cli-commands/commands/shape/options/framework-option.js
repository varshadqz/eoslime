const Option = require('../../option');
const repositories = require('../specific/repositories.json');

class FrameworkOption extends Option {
    constructor () {
        super(
            'framework',
            {
                "describe": "The front-end framework the project will be prepared for you on.",
                "type": "string",
                "default": "react"
            }
        );
    }

    process (optionValue) {
        if (!repositories[optionValue]) {
            throw new Error('Invalid Shape framework');
        }

        return repositories[optionValue];
    }
}

module.exports = new FrameworkOption();
