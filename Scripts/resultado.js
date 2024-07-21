        document.getElementById('saibaMaisBtn').addEventListener('click', function() {
            const videosContainer = document.getElementById('videosContainer');
            videosContainer.hidden = !videosContainer.hidden;
            this.innerText = videosContainer.hidden ? 'Saiba mais' : 'Mostrar menos';
        });

        // Carregar os resultados do localStorage
        document.getElementById('resultTotalMes').innerText = localStorage.getItem('resultTotalMes');
        document.getElementById('resultTotalAno').innerText = localStorage.getItem('resultTotalAno');