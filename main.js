<script>
        document.addEventListener("DOMContentLoaded", function() {
            let links = document.querySelectorAll(".portal-nav a");
            links.forEach(link => {
                link.addEventListener("click", function() {
                    links.forEach(l => l.classList.remove("active"));
                    this.classList.add("active");
                });
            });
        });
    </script>