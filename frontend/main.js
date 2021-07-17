window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
})

const functionApi = 'http://localhost:7071/api/GetResumeCounter';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi).then(resp => {
        return resp.json();
    }).then(resp => {
        console.log("Website called function API.");
        count = resp.count;
        document.getElementById('counter').innerHTML = count;
    }).catch(function(err) {
        console.error(err);
    });
    return count;
}