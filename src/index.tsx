import { getInput, setFailed } from '@actions/core';
import { execAndLogOutput } from '@gelatofm/exec-utils';

try {
    const type = getInput('type');

    if (type === 'affected') {
        execAndLogOutput('yarn gelato-cli lint --affected-files');
    } else {
        execAndLogOutput('yarn gelato-cli lint');
    }
} catch (error) {
    setFailed(error.message);
}
