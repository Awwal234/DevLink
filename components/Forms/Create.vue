<script setup lang="ts">
import baseapi from '../../api/base.ts'
const router = useRouter()
const input_one = ref(false)
const input_two = ref(false)
const input_three = ref(false)

const formerror = reactive({
    one: false,
    two: false,
    three: false,
})

const form = reactive({
    email: '',
    password: '',
    setpassword: ''
})

const verifySubmit = () => {
    if (form.email.length == 0 || form.password.length <= 7 || form.setpassword.length <= 7) {
        formerror.one = true;
        formerror.two = true;
        formerror.three = true;
    } else {
        formerror.one = false;
        formerror.two = false;
        formerror.two = false;
        goLogin();
    }
}

const goLogin = async() => {
    if (form.email.length == 0 || form.password.length <= 7 || form.setpassword.length <= 7) {
        router.push('/createaccount')
    } else {
        if(form.password === form.setpassword){
            try{
                const res = await baseapi.post('/auth/signup', {
                    'email': form.email,
                    'password': form.password
                })
                console.log(res.data)
                router.push('/')
                window.scroll(0, 0)
            }catch(err){
                router.push('/createaccount')
                console.log(err)
                formerror.one = true;
                formerror.two = true;
                formerror.three = true;
            }
        }else{
            formerror.two = true;
            formerror.three = true;
        }
    }
}

const gotoHanko = () => {
    router.push("/hankouse")
    window.scroll(0, 0)
}

const gotoLogin = () => {
    router.push("/")
    window.scroll(0, 0)
}
</script>
<template>
    <div class="md:p-[40px] md:rounded-[12px] w-full mx-auto md:w-[60%] lg:w-[35%] bg-[#fff]">
        <div class="font-[700] mb-[8px] text-[#333] leading-[150%] text-[24px] md:text-[32px]">
            Create Account
        </div>
        <div class="text-[16px] mb-[40px] text-[#737373] font-[400] leading-[150%]">
            Let’s get you started sharing your links!
        </div>
        <form @submit="(e) => { e.preventDefault() }">
            <div class="space-y-[4px] mb-[24px]">
                <div :class="formerror.one ? 'text-[#ff3939]' : 'text-[#333]'"
                    class="leading-[150%] text-[12px] font-[400]">
                    <label for="email">Email address</label>
                </div>
                <div :class="input_one ? 'border-[#633CFF] input_shadow' : 'border-[#d9d9d9]' && formerror.one ? 'border-[#FF3939]' : 'border-[#d9d9d9]'"
                    class="bg-[#fff] border-[1px] px-[16px] flex items-center w-full flex rounded-[8px]">
                    <div class="w-[10%]">
                        <img src="/img/email.svg" class="w-fit mx-auto object-cover" />
                    </div>
                    <div class="w-[90%]">
                        <input v-model="form.email" id="email" @click="input_one = true" @blur="input_one = false"
                            type="email" autocomplete="off" placeholder="e.g. alex@email.com"
                            class="w-full text-[#333] text-[16px] font-[400] leading-[150%] py-[12px] placeholder:opacity-[0.5] focus:outline-none" />
                    </div>
                </div>
            </div>
            <!---->
            <div class="space-y-[4px] mb-[24px]">
                <div :class="formerror.two ? 'text-[#ff3939]' : 'text-[#333]'"
                    class="leading-[150%] text-[12px] font-[400]">
                    <label for="password">Create password</label>
                </div>
                <div :class="input_two ? 'border-[#633CFF] input_shadow' : 'border-[#d9d9d9]' && formerror.two ? 'border-[#FF3939]' : 'border-[#d9d9d9]'"
                    class="bg-[#fff] border-[1px] px-[16px] flex items-center w-full flex rounded-[8px]">
                    <div class="w-[10%]">
                        <img src="/img/password.svg" class="w-fit mx-auto object-cover" />
                    </div>
                    <div class="w-[90%]">
                        <input v-model="form.password" @click="input_two = true" @blur="input_two = false" id="password"
                            type="password" autocomplete="off" placeholder="At least 8 characters"
                            class="w-full text-[#333] text-[16px] font-[400] leading-[150%] py-[12px] placeholder:opacity-[0.5] focus:outline-none" />
                    </div>
                </div>
            </div>
            <!---->
            <!---->
            <div class="space-y-[4px] mb-[24px]">
                <div :class="formerror.three ? 'text-[#ff3939]' : 'text-[#333]'"
                    class="leading-[150%] text-[12px] font-[400]">
                    <label for="passwordtwo">Confirm password</label>
                </div>
                <div :class="input_three ? 'border-[#633CFF] input_shadow' : 'border-[#d9d9d9]' && formerror.three ? 'border-[#FF3939]' : 'border-[#d9d9d9]'"
                    class="bg-[#fff] border-[1px] px-[16px] flex items-center w-full flex rounded-[8px]">
                    <div class="w-[10%]">
                        <img src="/img/password.svg" class="w-fit mx-auto object-cover" />
                    </div>
                    <div class="w-[90%]">
                        <input v-model="form.setpassword" @click="input_three = true" @blur="input_three = false"
                            id="passwordtwo" type="password" autocomplete="off" placeholder="At least 8 characters"
                            class="w-full text-[#333] text-[16px] font-[400] leading-[150%] py-[12px] placeholder:opacity-[0.5] focus:outline-none" />
                    </div>
                </div>
            </div>
            <!---->
            <div class="mb-[24px] leading-[150%] text-[#737373] text-[12px] font-[400]">
                Password must contain atleast 8 characters
            </div>
            <button @click="verifySubmit"
                class="w-full mb-[14px] text-[#fff] cursor-pointer font-[600] leading-[150%] text-[16px] py-[11px] rounded-[8px] px-[27px] bg-[#633cff] text-center hover:bg-[#beadff] button_shadow">
                Create new account
            </button>
            <!--or-->
            <div class="w-fit mb-[14px] mx-auto font-[500] text-[14px] text-[#333]">or</div>
            <button @click="gotoHanko"
                class="w-full mb-[24px] text-[#fff] cursor-pointer font-[600] leading-[150%] text-[16px] py-[11px] rounded-[8px] px-[27px] bg-[#633cff] text-center hover:bg-[#beadff] button_shadow">
                Create new account using Hanko
            </button>
            <!---->
            <div class="text-center font-[400] leading-[150%] text-[#737373] text-[16px] w-full">
                Already have an account?
                <span @click="gotoLogin" class="text-[#633cff] cursor-pointer">Login</span>
            </div>
            <!---->
        </form>
    </div>
</template>

<style scoped>
.input_shadow {
    box-shadow: 0px 0px 32px 0px rgba(99, 60, 255, 0.25);
}

.button_shadow:hover {
    box-shadow: 0px 0px 32px 0px rgba(99, 60, 255, 0.25);
}
</style>