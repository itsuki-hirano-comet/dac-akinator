(function(){
    console.log('reading js');

    window.addEventListener('load', function(){
        displayQuestion(1);
    });

    function displayQuestion(questionID) {
        const question = document.querySelector(`#q${questionID}`);
        // const option1 = document.querySelector(`#q${questionID} .answer1`);
        // const option2 = document.querySelector(`#q${questionID} .answer2`);
        const options = document.querySelectorAll(`#q${questionID} .options div`)

        question.className = 'on'
        // console.log(option1);
        // option1.addEventListener('click', function(event){
        //     question.className = 'off';
        //     // console.log('option 1 chosen');
        //     const answerID = this.id;
        //     console.log(answerID)
        //     if (questionID >= 4) {
        //         document.querySelector(`#result${answerID}`).className = 'resultOn'
        //     } else {
        //         displayQuestion(answerID);
        //     }
        // });

        // option2.addEventListener('click', function(event){
        //     question.className = 'off';
        //     // console.log('option 1 chosen');
        //     const answerID = this.id;
        //     console.log(answerID)
        //     if (questionID >= 4) {
        //         document.querySelector(`#result${answerID}`).className = 'resultOn'
        //     } else {
        //         displayQuestion(answerID);
        //     }
        // });
        for (const eachOption of options) {
            eachOption.addEventListener('click', function(event){
                question.className = 'off';
                // console.log('option 1 chosen');
                const answerID = this.id;
                console.log(answerID)
                if (questionID >= 4) {
                    document.querySelector(`#result${answerID}`).className = 'resultOn'
                } else {
                    displayQuestion(answerID);
                }
            });
        }

        
    }
}());