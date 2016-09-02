function sendQA(qa: IQAFormStatus, completed: lib.TCallback) {
  lib.callServer('q_and_a', qa).then(res => completed()).catch((msg) => { throw new lib.Exception(msg); });
}