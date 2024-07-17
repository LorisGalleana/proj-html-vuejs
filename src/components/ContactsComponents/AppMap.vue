<script>
    export default {
        name: 'AppMap',
        data() {
            return {
                cards: [
                    {
                        icon: 'fa-solid fa-location-dot',
                        title: 'ADDRESS:',
                        line1: '37 Flemig Way, London',
                        line2: 'UK'
                    },
                    {
                        icon: 'fa-solid fa-mobile-screen-button',
                        title: 'PHONE:',
                        line1: '(001) 123456789 - 234567891',
                        line2: 'info@phloxbusiness.com'
                    },
                    {
                        icon: 'fa-regular fa-clock',
                        title: 'WORK HOURS:',
                        line1: 'Monday-Friday: 09.00-23.00',
                        line2: 'Sunday: 09.00 - 16.00'
                    }
                ],
            }
        },
    }
</script>

<template>
    <div class="container-fluid position-relative">
        <div class="contact-cards d-flex gap-5 position-absolute">
            <div class="card" v-for="(card, i) in cards" :key="i">
                <div>
                    <i :class="card.icon"></i>
                </div>
                <div>
                    <h5 class="card-title"> {{ card.title }} </h5>
                    <p class="upper card-text"> {{ card.line1 }} </p>
                    <p class="card-text"> {{ card.line2 }} </p>
                </div>
            </div>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16704.44388398264!2d0.11163938674607704!3d51.51082288353242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8af64ddbcd4e9%3A0x8bb0eba23941c7c8!2sLondra%2C%20Regno%20Unito!5e0!3m2!1sit!2sit!4v1721229334293!5m2!1sit!2sit" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>    
    </div>
</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

.container-fluid {
    iframe {
        width: 100%;  
        margin: 0;
    }
}

p.upper {
    line-height: 10px;
}

.card {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 30px;

    border: 1px solid white;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 70px 60px;

    i {
        color: $green-text;
        font-size: 4rem;
    }
}

.contact-cards {
    width: 70%;
    bottom: -50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>