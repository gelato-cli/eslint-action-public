import { getInput, setFailed } from '@actions/core';
import { execAndLogOutput } from '@gelatofm/exec-utils';

try {
    const isBranch = getInput('is-branch');

    if (isBranch) {
        execAndLogOutput('yarn gelato-cli lint --affected-files');
    } else {
        execAndLogOutput('yarn gelato-cli lint');
    }
} catch (error) {
    setFailed(error.message);
}
