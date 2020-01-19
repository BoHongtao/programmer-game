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
                const _this = this;
                let input_key = _this.input;
                axios.post('/index.php/api/index/one', {
                    step: '3',
                    key: input_key
                }).then(function (response) {
                    if(response.data.code==200){
                        _this.$message({
                            message: '恭喜你，过了第三关，难度又增加了，现在开始第四关',
                            type: 'success'
                        });
                        _this.$router.push({path:'/fourth'})
                        return false;
                    }else{
                        _this.$message({
                            message: '菜鸡，错了',
                            type: 'warning'
                        });
                        return false;
                    }
                });
            },
            getkey() {
                this.$message('你以为我真的会告诉你吗？');
                console.log("d3d9446802a44259755d38e6d163e820")
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
