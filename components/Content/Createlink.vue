<script setup lang="ts">
const router = useRouter()
import baseapi from '../../api/base.ts'
import links from '../../api/links.json';
const arrLinks = ref([]) as any
const ads = ref(false)
const drop = ref(false)
arrLinks.value = links

const platform = ref('')
const link = ref('')
const linksset = ref([])

function printPlatform(e: any){
    platform.value = e.target.innerText;
    console.log(e.target.innerText)
    drop.value = false;
}

const inp2 = ref(false)
function checkLoggedUser(){
    const checkuser = localStorage.getItem('isLogged')
    if(checkuser === null || checkuser === undefined || checkuser === false){
        router.push('/')
    }else{
        console.log('okay user logged in')
    }
}
function validateInput(){
    if(platform.value.length === 0 || link.value.length === 0){
        console.log('fill inputs')
    } else{
        createLinks();
    }
}
async function createLinks(){
    const access = localStorage.getItem('access')
    try{
        const res = await baseapi.post('/link/create_link', {
            'platform': platform.value,
            'link': link.value
        }, {
            headers: {'Authorization': `Bearer ${access}`}
        })
        platform.value = "";
        link.value = "";
        console.log(res.data);
        getLinks();
    }catch(err){
        console.log(err)
    }
}
async function getLinks(){
    const access = localStorage.getItem('access')
    try{
        const res = await baseapi.get('/link/getlinks', {
            headers: {'Authorization': `Bearer ${access}`}
        })
        console.log(res.data);
        linksset.value = res.data
    }catch(err){
        console.log(err)
    }
}
function logOut(){
    localStorage.removeItem('access')
    localStorage.removeItem('refresh')
    localStorage.removeItem('isLogged')

    router.push('/')
}
onMounted(()=>{
    checkLoggedUser();
    getLinks();
})
</script>

<template>
    <div class="md:py-[40px] overflow-x-hidden bg-[#fff] rounded-[12px] py-[20px]">
        <div class="px-[24px] md:px-[40px]">
            <div class="text-[#333] mb-[8px] text-[24px] md:text-[32px] font-[700] leading-[150%]">
                Customize your links
            </div>
            <div class="text-[#737373] mb-[40px] text-[16px] font-[400] leading-[150%]">
                Add/edit/remove links below and then share all your profiles with the world!
            </div>
            <button @click="validateInput"
                class="py-[11px] w-full mb-[24px] text-[16px] leading-[150%] font-[600] text-[#633cff] cursor-pointer text-center px-[27px] rounded-[8px] border-[1px] border-[#633cff] hover:bg-[#efebff]">
                + Add new link
            </button>
            <!--ads for newcomers-->
            <div v-show="ads"
                class="py-[46.5px] mb-[25px] md:mb-[41px] px-[20px] md:py-[62.5px] md:px-[100px] rounded-[12px] bg-[#fafafa]">
                <div class="w-fit hidden md:block mx-auto">
                    <img src="/img/handbig.svg" class="" />
                </div>
                <div class="w-fit md:hidden mx-auto">
                    <img src="/img/handsmall.svg" class="" />
                </div>
                <div
                    class="mt-[24px] mb-[24px] md:text-[32px] text-[24px] leading-[150%] font-[700] text-[#333] md:mt-[40px] mx-auto text-center">
                    Let’s get you started
                </div>
                <div class="text-center leading-[150%] text-[#737373] text-[16px] font-[400]">
                    Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit
                    them. We’re here to help you share your profiles with everyone!
                </div>
            </div>
            <!--links-->
            <div class="mb-[24px] overflow-x-hidden rounded-[12px] p-[20px] w-full addlink_container">
                <div class="text-[12px] mb-[4px] font-[400] text-[#333] leading-[150%]">
                    Platform
                </div>
                <div :class="drop ? 'border-[#633cff] inp_shadowww' : 'border-[#d9d9d9]'"
                    class="py-[12px] mb-[12px] flex items-center  border-[1px] px-[16px] rounded-[8px] bg-[#fff]">
                    <div @click="drop = !drop" class="w-[90%]">
                        <input v-model="platform" type="text" readonly placeholder="Github"
                            class="w-full leading-[150%] font-[400] text-[16px] text-[#333] bg-[transparent] focus:outline-none" />
                    </div>
                    <div class="w-[10%] items-right">
                        <img @click="drop = !drop" src="/img/chevron.svg" class="w-fit float-right cursor-pointer" />
                    </div>
                </div>
                <!--dropdown links-->
                <div v-show="drop" class="w-fit">
                    <div
                        class="drop_shadows z-[10] h-[140px] overflow-y-scroll absolute mt-[8px] w-[65%] md:w-[48%] rounded-[8px] border-[#d9d9d9] border-[1px] bg-[#fff] py-[12px] px-[16px]">
                        <div class="space-y-[12px]" v-for="linkname in arrLinks" :key="linkname">
                            <div @click="printPlatform"
                                class="text-[#333] cursor-pointer leading-[150%] font-[400] text-[16px] hover:text-[#633cff]">
                                {{ linkname.link }}
                            </div>
                            <div class="border-b-[1px] mb-[12px] w-full border-[#d9d9d9]"></div>
                        </div>
                    </div>
                </div>
                <!---->
                <div class="text-[12px] mb-[4px] font-[400] text-[#333] leading-[150%]">
                    Link
                </div>
                <div :class="inp2 ? 'border-[#633cff] inp_shadowww' : 'border-[#d9d9d9]'"
                    class="py-[12px] mb-[12px] flex items-center  border-[1px] px-[16px] rounded-[8px] bg-[#fff]">
                    <div class="w-[5%] items-right">
                        <img src="/img/link.svg" class="w-fit float-left cursor-pointer" />
                    </div>
                    <div class="w-[95%]">
                        <input v-model="link" autocomplete="off" @blur="inp2 = !inp2" @click="inp2 = !inp2" type="url"
                            placeholder="https://www.example.com/johnappleseed"
                            class="w-full leading-[150%] font-[400] text-[16px] text-[#333] bg-[transparent] focus:outline-none" />
                    </div>
                </div>
                <!---->
            </div>
            <!--end links-->
            <!--list links-->
            <div class="h-[300px] side md:h-[300px] overflow-scroll">
                <div v-for="links in linksset" :key="links.id" class="mb-[24px] overflow-x-hidden rounded-[12px] p-[20px] w-full addlink_container">
                    <div class="text-[12px] mb-[4px] font-[400] text-[#333] leading-[150%]">
                        Platform
                    </div>
                    <div
                        class="py-[12px] mb-[12px] flex items-center  border-[1px] px-[16px] rounded-[8px] bg-[#fff]">
                        <div class="w-[90%]">
                            <input :value="links.platform" type="text" readonly placeholder="Github"
                                class="w-full leading-[150%] font-[400] text-[16px] text-[#333] bg-[transparent] focus:outline-none" />
                        </div>
                        <div class="w-[10%] hidden items-right">
                            <img @click="drop = !drop" src="/img/chevron.svg" class="w-fit float-right cursor-pointer" />
                        </div>
                    </div>
                    <!--dropdown links-->
                    <!---->
                    <div class="text-[12px] mb-[4px] font-[400] text-[#333] leading-[150%]">
                        Link
                    </div>
                    <div
                        class="py-[12px] mb-[12px] flex items-center  border-[1px] px-[16px] rounded-[8px] bg-[#fff]">
                        <div class="w-[5%] items-right">
                            <img src="/img/link.svg" class="w-fit float-left cursor-pointer" />
                        </div>
                        <div class="w-[95%]">
                            <input :value="links.link" readonly autocomplete="off" @blur="inp2 = !inp2" @click="inp2 = !inp2" type="url"
                                placeholder="https://www.example.com/johnappleseed"
                                class="w-full leading-[150%] font-[400] text-[16px] text-[#333] bg-[transparent] focus:outline-none" />
                        </div>
                    </div>
                    <!---->
                </div>
            </div>
            <!--end lists-->
        </div>
        <div class="w-full mb-[16px] md:mb-[24px] border-b-[1px] border-[#d9d9d9]"></div>
        <div class="md:px-[40px] px-[16px]">
            <button @click="logOut"
                class="bg-[#633cff] box_s md:float-right cursor-pointer text-[#fff] leading-[150%] text-[16px] font-[600] w-full md:w-fit opacity-[0.25] text-center py-[11px] md:px-[27px] rounded-[8px] hover:bg-[#beadff] hover:opacity-[1]">
                Logout
            </button>
        </div>
        <div class="hidden md:block pt-[24px]"></div>
        <!---->
    </div>
</template>

<style scoped>
.box_s:hover {
    box-shadow: 0px 0px 32px 0px rgba(99, 60, 255, 0.25);
}

.addlink_container {
    background: var(--Light-Grey, #FAFAFA);
}

.drop_shadows {
    box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.10);
}

.drop_shadows::-webkit-scrollbar {
    width: 2px;
    background: #fff;
}

.drop_shadows::-webkit-scrollbar-track {
    width: fit-content;
    background: transparent;
}

.drop_shadows::-webkit-scrollbar-thumb {
    width: 2px;
    background: #633cff;
}

.inp_shadowww {
    box-shadow: 0px 0px 32px 0px rgba(99, 60, 255, 0.25);
}
.side::-webkit-scrollbar{
    display:none;
}
</style>