<script>
export default {
    name: 'AppMap',
}
</script>
<template>
    <div class="container margin-top">
        <div class="row align-items-center">
            <div class="col-4">
                <h2 class="fs-1 lh-base">
                        Please get in <span class="green-text">touch</span> with <span class="green-text">us</span>
                </h2>
                <!-- Interlinea -->
                <div class="full-line mt-5 mb-5 d-flex gap-2">
                    <div class="short">

                    </div>
                    <div class="long">

                    </div>
                </div>
                <p>
                    When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary.When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees.
                </p>

            </div>
            <!-- FORM -->
            <div class="col-8">
                <div class="text">
                    Send Message
                </div>
                <form action="#">
                    <div class="form-row">
                        <div class="input-data">
                            <input type="text" required>
                            <div class="underline"></div>
                            <label for="">Full Name*</label>
                        </div>
                        <div class="input-data">
                            <input type="email" required>
                            <div class="underline"></div>
                            <label for="">Email*</label>
                        </div>
                        <div class="input-data">
                            <input type="text" required>
                            <div class="underline"></div>
                            <label for="">Please Insert Phone number</label>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="input-data textarea">
                            <textarea rows="8" cols="80" required></textarea>
                            <br />
                            <div class="underline"></div>
                            <label for="">Write your message</label>
                            <br />
                            <div class="form-row">
                                <div class="col-12 d-flex justify-content-end">
                                    <button class="btn py-3 px-5" type="submit">
                                        SEND NOW
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@use '../../styles/partials/variables' as *;

.green-text{
    color: $green-text;
}

.margin-top{
    margin: 300px auto;
}

/* Form style */
input,textarea{
    outline: none;
}

.text{
  font-size: 2em;
  font-weight: 600;
}

/* Form row */

.form-row{
  display: flex;
  margin: 32px 0;
}

.input-data{
  width: 100%;
  height: 40px;
  margin: 0 10px;
  position: relative;
}

.textarea{
  height: 50px;
}

.input-data input,
.textarea textarea{
  display: block;
  width: 100%;
  height: 100%;
  border: none;
  font-size: 17px;
  border-bottom: 2px solid rgba(0,0,0, 0.12);
}

.input-data input:focus ~ label, .textarea textarea:focus ~ label,
.input-data input:valid ~ label, .textarea textarea:valid ~ label{
  transform: translateY(-20px);
  font-size: 14px;
  color: #3498db;
}



.input-data label{
  position: absolute;
  pointer-events: none;
  bottom: 10px;
  font-size: 16px;
  transition: all 0.3s ease;
}

.textarea label{
  width: 100%;
  bottom: 40px;
}

/* Button */
.btn{
    background: $green-gradient;
    color: white;
    border-radius: 30px;
    font-size: 0.8em;
}
</style>