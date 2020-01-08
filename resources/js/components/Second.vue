<template>
    <el-main>
        <el-row direction="horizontal">
            <el-input v-model="input" placeholder="请输入秘钥" :disabled="true"></el-input>
            <el-button type="primary" v-on:click="commit" disabled>提交密钥</el-button>
            <el-button type="success" v-on:click="getkey" disabled>获取密钥</el-button>
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
        methods:{
            commit() {
                var _this = this;
                let input_key = _this.input;
                if(input_key=="96a3be3cf272e017046d1b2674a52bd3"){
                    this.$message({
                        message: '恭喜你，过了第二关，后面会更难',
                        type: 'success'
                    });
                    this.$router.push({path:'/third'})
                }else{
                    this.$message({
                        message: '菜鸡，错了',
                        type: 'warning'
                    });
                }
            },
            getkey() {
                this.$message('你以为我真的会告诉你吗？');
                console.log("96a3be3cf272e017046d1b2674a52bd3")
            },
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
