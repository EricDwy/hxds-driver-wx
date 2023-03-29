<template>
	<view>
		<view class="face-container">
			<camera device-position="front" flash="off" class="camera" @error="error" v-if="showCamera">
				<cover-image src="../static/face_camera/bg.png" class="bg"></cover-image>
			</camera>
			<view class="image-container" v-if="showImage">
				<image mode="widthFix" class="photo" :src="photoPath"></image>
				<view class="cover"></view>
			</view>
		</view>
		<view class="desc">
			<block v-if="mode == 'verificate'">
				<image src="../static/face_camera/tips.png" mode="widthFix" class="tips"></image>
				<text>请把面部放在圆圈内</text>
				<text>拍摄脸部来确认身份</text>
			</block>
			<block v-if="mode == 'create'">
				<image src="../static/face_camera/face.png" mode="widthFix" class="face"></image>
				<text>请把完整面部放在圆圈内</text>
				<text>拍摄脸部来保存身份识别数据</text>
			</block>
		</view>
		<button class="btn" @tap="confirmHandle">{{ mode == 'create' ? '录入面部信息' : '身份核实' }}</button>
	</view>
</template>

<script>
let dayjs = require('dayjs');
export default {
	data() {
		return {
			mode: 'verificate',
			photoPath: '',
			showCamera: true,
			showImage: false,
			audio: null
		};
	},
	methods: {
		confirmHandle:function(){
			let that=this
			that.audio.stop()
			let ctx=uni.createCameraContext()
			ctx.takePhoto({
				quality:'high',
				success:function(resp){
					that.photoPath=resp.tempImagePath
					that.showCamera=false
					that.showImage=true
					uni.getFileSystemManager().readFile({
						filePath:that.photoPath,
						encoding:"base64",						
						success:function(resp){
							let base64='data:image:/png;base64,'+resp.data;
							let url=null;
							if(that.mode=="create"){
								url=that.url.createDriverFaceModel;
							}else{
								url=that.url.verificateDriverFace;
							}
								that.ajax(url,"POST",{photo:base64},function(resp){
									let result = resp.data.result
									if(that.mode=="create"){
										if(result!=null&&result.length>0){
											console.error(result);
											uni.showToast({
												icon:'none',
												title:'面部录入失败，请重新录入'
											});
											setTimeout(function(){
												that.showCamera=true;
												that.showImage=false;
											},2000);
										}else{
										   uni.showToast({
											title:'面部录入成功'
										   });
										    setTimeout(function(){
											   uni.switchTab({
												url:'../../pages/workbench/workbench'
											  })
										   },2000);
									    }
									}
									 else{
																							
									}   					
								})
						}						
					})
			}
		    })
	  }
	},
	onLoad: function(options) {
		let that =this
		that.mode=options.mode
		let audio=uni.createInnerAudioContext();
		that.audio=audio
		audio.src="/static/voice/voice_5.mp3"
		audio.play()
	},
	onHide:function(){
		if(this.audio!=null){
			this.audio.stop()
		}
	}
};
</script>

<style lang="less">
@import url('face_camera.less');
</style>
