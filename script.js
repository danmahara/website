        // Function to generate a random color (excluding white)
        // function getRandomColor() {
        //     var letters = '0123456789ABCDEF';
        //     var color = '#';
        //     do {
        //         color = '#';
        //         for (var i = 0; i < 6; i++) {
        //             color += letters[Math.floor(Math.random() * 16)];
        //         }
        //     } while (color === '#FFFFFF'); // Keep generating until a non-white color is obtained
        //     return color;
        // }


        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            
            do {
                color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
            }
        while(color==='#ffffff');
            return color;
        }
        
   
        


        // Change text color on page load
        // document.addEventListener('DOMContentLoaded', function() {
        //     var element = document.getElementById('changeColor');
        //     element.style.color = getRandomColor();
        // });
        document.addEventListener('auto', function() {
            var element = document.getElementById('changeColor');
            element.style.color = getRandomColor();
        });

        // Change text color on every click
        document.addEventListener('click', function() {
            var element = document.getElementById('changeColor');
            element.style.color = getRandomColor();
        });



        // loading function

        // document.addEventListener('DOMContentLoaded', function () {
        //     // Simulate content loading with a delay (replace this with your actual content loading logic)
        //     setTimeout(function () {
        //         var loadingIndicator = document.getElementById('loadingIndicator');
        //         if (loadingIndicator) {
        //             loadingIndicator.style.display = 'none';
        //         }
        //     }, 300); // Adjust the delay time as needed
        // });