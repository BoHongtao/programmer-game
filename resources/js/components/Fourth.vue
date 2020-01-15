<template>
    <el-main>
        <el-row direction="horizontal">
            <el-input v-model="input" placeholder="请输入秘钥"></el-input>
            <el-button type="primary" v-on:click="commit">提交密钥</el-button>
            <el-button type="success" v-on:click="getkey">获取密钥</el-button>
        </el-row>
    </el-main>
</template>
<script>
    export default {
        data () {
            return {
                input: '',
                dialogVisible: false
            }
        },
        mounted(){
            window.addEventListener('keydown', this.onClick);
            document.oncontextmenu = () => false;
        },
        methods:{
            commit() {
                var _this = this;
                let input_key = _this.input;
                if(input_key=="6512bd43d9caa6e02c990b0a82652dca"){
                    this.$message({
                        message: '恭喜你，过了第四关',
                        type: 'success'
                    });
                    this.$router.push({path:'/fifth'})
                }else{
                    this.$message({
                        message: '菜鸡，错了',
                        type: 'warning'
                    });
                }
            },
            getkey() {
                this.$message('我觉得你应该找到规律了？');
            },
            onClick (val) {
                if (val.keyCode === 123) {
                    window.event.preventDefault();
                    return false
                }
            }
        }
    }
</script>
<style scoped>
    .el-input{
        width: 300px;
        margin-left: 35%;
        margin-top: 20%;
    }
    .el-row{
        align:center
    }
</style>
