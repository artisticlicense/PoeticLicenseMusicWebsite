var featureArr = [1,2];
var curFeatureIndex = 0;

function scrollFeature(){
	//Only goes up/right for the moment. TODO: Expand to go forward & backward.
	if(curFeatureIndex == featureArr.length-1) curFeatureIndex = 0;
	else curFeatureIndex++;

	document.getElementById("feature").style.backgroundImage = "url('images/Feature" + featureArr[curFeatureIndex] + ".jpg')";
}
