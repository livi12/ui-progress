function progress(options){
	var self = this;
	self.targetDom=$(options.targetDom);		/*传入的target的节点*/
	self.totalNum=options.totalNum;		/*传入的总数量*/
	self.currentNum=options.currentNum;		/*现在的数量*/
	self.proportion=parseInt(self.currentNum)/parseInt(self.totalNum)*100+'%';	/*传入的比例系数*/
	self.proportionText=self.targetDom.find('.proportion-text');	/*比例系数文字显示的位置*/
	self.progressBar=self.targetDom.find('.bar');	/*进度条中的进度条节点*/
	self.init();
}
progress.prototype={
	init:function(){
		var self=this;
		self.progressBar.css('width', self.proportion);
		/*有些进度条不需要显示文字*/
		if(self.proportionText){

			self.proportionText.text(self.currentNum+'/'+self.totalNum);
		}
	}
}
