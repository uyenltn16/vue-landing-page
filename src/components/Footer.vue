<template>
    <footer class="py-6 bg-dark text-white">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h5 class="text-white">About Phantom</h5>
                    <p class="text-muted">Magnis modipsae que voloratati andigen daepeditem quiate conecus aut labore.
                        Laceaque quiae sitiorem rest non restibusaes maio es dem tumquam explabo.</p>
                    <ul class="list-inline social social-rounded social-sm">
                        <li class="list-inline-item">
                            <a href=""><font-awesome-icon :icon="['fab', 'facebook-f']"/></a>
                        </li>
                        <li class="list-inline-item">
                            <a href=""><font-awesome-icon :icon="['fab', 'twitter']" /></a>
                        </li>
                        <li class="list-inline-item">
                            <a href=""><font-awesome-icon :icon="['fab', 'google-plus-g']" /></a>
                        </li>
                        <li class="list-inline-item">
                            <a href=""><font-awesome-icon :icon="['fab', 'dribbble']" /></a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-3 ml-auto">
                    <h5 class="text-white">Company</h5>
                    <ul class="list-unstyled mt-4">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms of Service</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div class="col-md-3 text-center">
                    <p class="text-white">
                        <vue-feather type="message-circle" size="40"></vue-feather>
                    </p>
                    <h5 class="text-white">Need Help?</h5>
                    <p class="text-muted mt-4">
                        Send us an email at <a href="#">support@example.com</a> if you have any questions. We'll help
                        you out.
                    </p>
                </div>
            </div>
            <div class="row mt-5">
                <div class="col-12 text-muted text-center small-xl">
                    &copy; 2019 Phantom - All Rights Reserved
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>
