(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_7 = function() {
	this.initialize(img.CachedBmp_7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2558,76);


(lib.StartBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// label
	this.txt = new cjs.Text("start/stop", "8px 'Exo 2'", "#FFFFFF");
	this.txt.name = "txt";
	this.txt.textAlign = "center";
	this.txt.lineHeight = 12;
	this.txt.lineWidth = 131;
	this.txt.parent = this;
	this.txt.setTransform(0,-4.65);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(4));

	// skins
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.1,2,1).p("AABAAIgBAA");
	this.shape.setTransform(24.65,11.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003E74").s().p("AD3B4IgBAAIo9AAQgxAAgigkQgkgjAAgxQAAgwAkgkQAXgXAdgIQAPgEAQAAIKOAAQAxAAAkAjQAjAkAAAwQAAAxgjAjQgkAkgxAAg");
	this.shape_1.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.5,-12,135.1,25);


(lib.frame_floor = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("Au4JhIbG18ICqC7I7GV8g");
	this.shape.setTransform(-222.95,37.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AuxJrIa62NICpC7I63WKg");
	this.shape_1.setTransform(-223.675,37.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AurJzIat2dICqC7I6qWag");
	this.shape_2.setTransform(-224.375,36.325);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AulJ9Iah2uICqC8I6cWng");
	this.shape_3.setTransform(-225.075,35.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AueKGIaU2+ICpC7I6NW2g");
	this.shape_4.setTransform(-225.775,34.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#999999").s().p("AuYKPIaI3PICpC8I5/XFg");
	this.shape_5.setTransform(-226.5,33.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AuSKYIZ83fICpC8I5yXTg");
	this.shape_6.setTransform(-227.2,33.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s().p("AuLKhIZv3wICoC8I5iXig");
	this.shape_7.setTransform(-227.925,32.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#999999").s().p("AuFKqIZi4AICpC9I5VXwg");
	this.shape_8.setTransform(-228.6,31.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#999999").s().p("At/KzIZW4QICpC8I5HX/g");
	this.shape_9.setTransform(-229.325,30.575);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#999999").s().p("At4K8IZJ4hICoC9I44YOg");
	this.shape_10.setTransform(-230.025,29.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AtyLFIY94xICoC9I4qYcg");
	this.shape_11.setTransform(-230.75,28.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#999999").s().p("AtsLOIYx5CICoC9I4cYrg");
	this.shape_12.setTransform(-231.475,28.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#999999").s().p("AtmLXIYk5SICpC+I4PY5g");
	this.shape_13.setTransform(-232.15,27.275);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#999999").s().p("AtfLgIYY5iICnC+I3/ZHg");
	this.shape_14.setTransform(-232.875,26.45);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#999999").s().p("AtZLqIYL50ICoC+I3yZXg");
	this.shape_15.setTransform(-233.575,25.625);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#999999").s().p("AtSLzIX+6EICoC+I3kZlg");
	this.shape_16.setTransform(-234.3,24.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#999999").s().p("AtML8IXy6UICnC+I3VZzg");
	this.shape_17.setTransform(-235,23.975);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#999999").s().p("AtGMFIXm6kICnC+I3HaCg");
	this.shape_18.setTransform(-235.7,23.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#999999").s().p("AtAMOIXa61ICmC/I25aQg");
	this.shape_19.setTransform(-236.4,22.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#999999").s().p("As5MXIXN7FICmC/I2qaeg");
	this.shape_20.setTransform(-237.125,21.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape}]},39).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape}]},1).wait(1));

	// Layer_6
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#999999").s().p("Au4JhIbG18ICrC7I7HV8g");
	this.shape_21.setTransform(-52.375,-100.15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#999999").s().p("Au9JYIbT1rICoC8I7RVrg");
	this.shape_22.setTransform(-53.025,-101);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#999999").s().p("AvDJRIbg1dICmC+I7dVbg");
	this.shape_23.setTransform(-53.65,-101.85);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#999999").s().p("AvIJIIbs1MIClC/I7oVKg");
	this.shape_24.setTransform(-54.25,-102.675);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#999999").s().p("AvOJAIb508ICkDBI70U4g");
	this.shape_25.setTransform(-54.9,-103.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#999999").s().p("AvTI3IcF0rICiDCI7/Ung");
	this.shape_26.setTransform(-55.525,-104.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#999999").s().p("AvYIvIcS0bICfDDI8KUWg");
	this.shape_27.setTransform(-56.175,-105.225);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#999999").s().p("AveInIcf0MICeDFI8WUFg");
	this.shape_28.setTransform(-56.825,-106.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#999999").s().p("AvjIeIcrz7ICcDGI8hT1g");
	this.shape_29.setTransform(-57.425,-106.925);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#999999").s().p("AvpIWIc5zrICaDII8tTjg");
	this.shape_30.setTransform(-58.05,-107.775);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#999999").s().p("AvuIOIdFzbICYDJI83TSg");
	this.shape_31.setTransform(-58.7,-108.625);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#999999").s().p("AvzIFIdRzKICXDKI9DTBg");
	this.shape_32.setTransform(-59.35,-109.475);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#999999").s().p("Av5H9Idey7ICVDMI9OSxg");
	this.shape_33.setTransform(-59.975,-110.325);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#999999").s().p("Av+H0IdqyqICTDNI9aSgg");
	this.shape_34.setTransform(-60.575,-111.15);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#999999").s().p("AwEHtId4ybICRDPI9lSOg");
	this.shape_35.setTransform(-61.225,-112.025);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#999999").s().p("AwJHkIeEyLICPDQI9xR+g");
	this.shape_36.setTransform(-61.85,-112.85);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#999999").s().p("AwOHbIeRx5ICNDRI98Rtg");
	this.shape_37.setTransform(-62.5,-113.7);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#999999").s().p("AwUHUIedxrICMDTI+HRcg");
	this.shape_38.setTransform(-63.15,-114.575);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#999999").s().p("AwaHLIerxaICKDUI+TRLg");
	this.shape_39.setTransform(-63.75,-115.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#999999").s().p("AwfHDIe3xKICIDWI+eQ6g");
	this.shape_40.setTransform(-64.375,-116.25);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#999999").s().p("AwkG7IfDw7ICGDXI+pQqg");
	this.shape_41.setTransform(-65.025,-117.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21}]}).to({state:[{t:this.shape_21}]},39).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_21}]},1).wait(1));

	// Layer_7
	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#999999").s().p("Au3pgICqi7IbGV8IiqC7g");
	this.shape_42.setTransform(349.05,37.975);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#999999").s().p("AuxpoICqi7Ia5WOIisC5g");
	this.shape_43.setTransform(349.825,37.075);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#999999").s().p("AuppvICoi8IarWgIitC3g");
	this.shape_44.setTransform(350.6,36.225);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#999999").s().p("Aujp3ICoi8IafWxIivC2g");
	this.shape_45.setTransform(351.375,35.325);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#999999").s().p("Aucp/ICni8IaSXDIixCzg");
	this.shape_46.setTransform(352.175,34.45);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#999999").s().p("AuVqGICmi9IaFXVIiyCxg");
	this.shape_47.setTransform(352.925,33.55);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#999999").s().p("AuOqOICli9IZ4XmIi0Cxg");
	this.shape_48.setTransform(353.725,32.7);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#999999").s().p("AuHqVICki+IZrX4Ii1Cug");
	this.shape_49.setTransform(354.5,31.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#999999").s().p("AuAqcICji+IZeYJIi3Csg");
	this.shape_50.setTransform(355.25,30.925);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#999999").s().p("At5qkICji+IZQYbIi5Cqg");
	this.shape_51.setTransform(356.05,30.025);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#999999").s().p("AtyqrICii/IZDYsIi6Cpg");
	this.shape_52.setTransform(356.825,29.175);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#999999").s().p("AtrqzIChi/IY2Y+Ii8Cng");
	this.shape_53.setTransform(357.625,28.275);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#999999").s().p("Atkq7ICgi/IYpZQIi+Clg");
	this.shape_54.setTransform(358.375,27.4);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#999999").s().p("AterCICgjAIYdZiIjACjg");
	this.shape_55.setTransform(359.15,26.5);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#999999").s().p("AtWrKICejAIYQZzIjCCig");
	this.shape_56.setTransform(359.95,25.65);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#999999").s().p("AtPrRICejBIYCaFIjDCgg");
	this.shape_57.setTransform(360.7,24.75);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#999999").s().p("AtIrYICcjCIX2aXIjFCeg");
	this.shape_58.setTransform(361.5,23.875);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#999999").s().p("AtCrgICcjCIXpaoIjHCdg");
	this.shape_59.setTransform(362.275,22.975);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#999999").s().p("As7rnICcjDIXaa6IjHCbg");
	this.shape_60.setTransform(363.05,22.125);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#999999").s().p("As0rvICbjDIXObMIjKCZg");
	this.shape_61.setTransform(363.825,21.225);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#999999").s().p("As6roICbjCIXaa6IjHCbg");
	this.shape_62.setTransform(363.075,22.075);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#999999").s().p("AtBrhICcjCIXnaqIjHCcg");
	this.shape_63.setTransform(362.35,22.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#999999").s().p("AtHraICcjBIX0aZIjFCeg");
	this.shape_64.setTransform(361.6,23.75);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#999999").s().p("AtOrSICdjCIYAaJIjDCgg");
	this.shape_65.setTransform(360.875,24.575);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#999999").s().p("AtVrLICfjBIYMZ4IjCChg");
	this.shape_66.setTransform(360.125,25.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#999999").s().p("AtbrEICfjBIYYZnIjACjg");
	this.shape_67.setTransform(359.375,26.25);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#999999").s().p("Atiq9ICgjAIYlZWIi+Clg");
	this.shape_68.setTransform(358.65,27.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#999999").s().p("Atpq2IChi/IYxZFIi9Cmg");
	this.shape_69.setTransform(357.9,27.925);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#999999").s().p("AtvqvIChi/IY+Y1Ii7Cog");
	this.shape_70.setTransform(357.175,28.775);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#999999").s().p("At1qoICii+IZKYjIi6Cqg");
	this.shape_71.setTransform(356.45,29.625);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#999999").s().p("At8qgICji/IZWYTIi4Csg");
	this.shape_72.setTransform(355.7,30.425);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#999999").s().p("AuDqZICki+IZjYCIi3Ctg");
	this.shape_73.setTransform(354.975,31.275);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#999999").s().p("AuJqSICki9IZvXxIi1Cug");
	this.shape_74.setTransform(354.225,32.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#999999").s().p("AuQqLICli9IZ8XgIizCxg");
	this.shape_75.setTransform(353.5,32.95);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#999999").s().p("AuWqEICli9IaIXRIiyCyg");
	this.shape_76.setTransform(352.75,33.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#999999").s().p("Audp9ICni8IaUW/IiwC0g");
	this.shape_77.setTransform(352,34.625);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#999999").s().p("Aukp2ICoi8IahWvIivC1g");
	this.shape_78.setTransform(351.275,35.45);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#999999").s().p("AuqpuICoi8IatWeIitC3g");
	this.shape_79.setTransform(350.525,36.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#999999").s().p("AuxpnICpi7Ia6WNIisC4g");
	this.shape_80.setTransform(349.8,37.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_42}]}).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_42}]},1).wait(41));

	// Layer_3
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#999999").s().p("Au4pgICri7IbGV8IiqC7g");
	this.shape_81.setTransform(178.475,-100.15);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#999999").s().p("Au9pWICoi9IbUVrIiqC8g");
	this.shape_82.setTransform(179.15,-101.075);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#999999").s().p("AvDpMICni+IbgVZIioC8g");
	this.shape_83.setTransform(179.8,-101.975);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#999999").s().p("AvJpCICljAIbuVJIioC8g");
	this.shape_84.setTransform(180.475,-102.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#999999").s().p("AvOo4ICijBIb8U3IioC8g");
	this.shape_85.setTransform(181.15,-103.825);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#999999").s().p("AvUovICgjCIcJUmIimC9g");
	this.shape_86.setTransform(181.8,-104.75);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#999999").s().p("AvaokICfjEIcWUUIilC9g");
	this.shape_87.setTransform(182.475,-105.65);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#999999").s().p("AvgobICdjFIckUDIilC+g");
	this.shape_88.setTransform(183.15,-106.575);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#999999").s().p("AvloRICajHIcxTyIijC/g");
	this.shape_89.setTransform(183.8,-107.475);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#999999").s().p("AvroHICZjJIc+TiIijC+g");
	this.shape_90.setTransform(184.475,-108.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#999999").s().p("Avwn9ICWjKIdMTQIiiC/g");
	this.shape_91.setTransform(185.15,-109.325);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#999999").s().p("Av2nzICUjMIdZS/IihDAg");
	this.shape_92.setTransform(185.825,-110.25);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#999999").s().p("Av8nqICTjMIdmStIigDAg");
	this.shape_93.setTransform(186.475,-111.15);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#999999").s().p("AwBngICQjOIdzScIifDBg");
	this.shape_94.setTransform(187.15,-112.075);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#999999").s().p("AwHnWICOjPIeBSKIifDBg");
	this.shape_95.setTransform(187.825,-112.975);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#999999").s().p("AwNnMICNjRIeOR6IieDBg");
	this.shape_96.setTransform(188.475,-113.9);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#999999").s().p("AwTnCICLjSIebRoIicDBg");
	this.shape_97.setTransform(189.15,-114.825);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#999999").s().p("AwYm4ICIjUIepRXIicDCg");
	this.shape_98.setTransform(189.825,-115.75);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#999999").s().p("AwemuICHjVIe2RFIibDCg");
	this.shape_99.setTransform(190.475,-116.65);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#999999").s().p("AwjmkICEjXIfDQ0IiaDDg");
	this.shape_100.setTransform(191.15,-117.575);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#999999").s().p("AwemtICGjWIe3RFIibDCg");
	this.shape_101.setTransform(190.525,-116.725);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#999999").s().p("AwZm3ICJjUIeqRVIicDCg");
	this.shape_102.setTransform(189.875,-115.825);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#999999").s().p("AwUnAICLjTIedRmIicDBg");
	this.shape_103.setTransform(189.25,-114.975);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#999999").s().p("AwOnKICMjRIeRR2IidDBg");
	this.shape_104.setTransform(188.6,-114.075);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#999999").s().p("AwInTICNjQIeESGIieDBg");
	this.shape_105.setTransform(188,-113.225);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#999999").s().p("AwDndICQjOId3SXIifDAg");
	this.shape_106.setTransform(187.35,-112.35);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#999999").s().p("Av+nmICSjNIdrSnIigDAg");
	this.shape_107.setTransform(186.725,-111.475);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#999999").s().p("Av4nwICTjLIdeS3IigDAg");
	this.shape_108.setTransform(186.075,-110.6);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#999999").s().p("Avzn5ICVjKIdSTIIihC/g");
	this.shape_109.setTransform(185.45,-109.725);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#999999").s().p("AvuoCICYjJIdFTYIijC/g");
	this.shape_110.setTransform(184.825,-108.85);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#999999").s().p("AvooMICZjHIc4TpIijC+g");
	this.shape_111.setTransform(184.175,-108);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#999999").s().p("AvjoVICcjGIcrT5IikC+g");
	this.shape_112.setTransform(183.55,-107.125);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#999999").s().p("AvdoeICdjFIcfUJIilC+g");
	this.shape_113.setTransform(182.9,-106.25);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#999999").s().p("AvYooICfjDIcSUaIilC9g");
	this.shape_114.setTransform(182.275,-105.375);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#999999").s().p("AvToxICijCIcFUqIinC9g");
	this.shape_115.setTransform(181.65,-104.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#999999").s().p("AvNo7ICijAIb5U7IinC8g");
	this.shape_116.setTransform(181.025,-103.65);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#999999").s().p("AvIpEICli/IbsVLIioC8g");
	this.shape_117.setTransform(180.375,-102.75);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#999999").s().p("AvCpNICmi+IbgVbIipC8g");
	this.shape_118.setTransform(179.75,-101.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#999999").s().p("Au9pXICpi8IbSVrIipC8g");
	this.shape_119.setTransform(179.1,-101);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_81}]}).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_81}]},1).wait(41));

	// Layer_2
	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#000000").ss(1.1,1,1).p("EhGUAfOQgTAAgUABMAAAg+LIBNAAIG3gFIBMAAIAAAlMAAAAw3IAAJEIIeAAIEgAAIAADwIs+AAIAAgFIAAjrEg7AgdeQAEgHAFgGQANgMASAAQASAAAMAMQAHAGACAHQgCAHgHAGQgCADgDACQADACACACIABABQABAAAAABQAFAFACAGQAEAIAAAKQAAAJgEAIQAEAIAAAKQAAAJgEAIQAEAIAAAKQAAAJgEAIQgCAHgHAGQgCADgDACQADACACACIABABQABAAAAABQAFAFACAGQAEAIAAAKQAAAJgEAIQgCAHgHAGQgCADgDACQADACACACQAHAGACAHQgCAHgHAGQgMANgSAAQgSAAgNgNQgFgGgEgHQgDgIAAgJQAAgKADgIQgDgIAAgJQAAgKADgIQgDgIAAgJQAAgKADgIQgDgIAAgJQAAgKADgIQAEgHAFgGQADgCADgCQgDgCgBgBIgCgCQgFgGgEgHQAEgHAFgGQADgCADgCQgDgCgDgDQgFgGgEgHQgDgIAAgJQAAgKADgIQgDgIAAgJQAAgSAMgNQAJgIALgDQAAAAAAAAQAFgBAGAAQASAAAMAMQAHAHADAJIgzAAIAAgbIAAAAIjIgDEg6xgdMQgDgCgDgDQgFgGgEgHEg7Agc7QAEgHAFgGQADgCADgCEg5wgd+QADAHAAAIQAAAJgEAIQAEAIAAAKQAAAJgEAIQgCAHgHAGQgCADgDACQADACACACQAHAGACAHQgCAHgHAGQgCADgDACQADACACACIABABQABAAAAABQAFAFACAGQgCAHgHAGQgCADgDACQADACACACQAHAGACAHQAEAIAAAKQAAAJgEAIQgCAHgHAGQgCADgDACQADACACACQAHAGACAHQAEAIAAAKQAAAJgEAIQAEAIAAAKQAAAHgCAGQgDAKgIAHQgMANgSAAQgEAAgEgBQgNgCgKgKQgMgMAAgSQAAgKADgIQAEgHAFgGQADgCADgCQgCgCgCgBIgCgCQgFgGgEgHQAEgHAFgGQADgCADgCQgDgCgDgDQgFgGgEgHQAEgHAFgGQADgCADgCQAKgIAPAAQAOAAALAIQgLAIgOAAQgIAAgIgDIgFgCQgCgCgCgBQgCgCgCgBIgCgCQgFgGgEgHQAEgHAFgGQADgCADgCQAKgIAPAAQAOAAALAIQgLAIgOAAQgPAAgKgIQgDgCgDgDQgFgGgEgHQgDgIAAgJQAAgKADgIQgDgIAAgJQAAgKADgIEg6jgeZIAAAAQAAgNAAgOMB1hAAAIAAAZIAAACIgLAAQAFgCAGAAIAAAAQAHAAAFACIgMAAIAAAbIgpAAMh0FAAAEg5/gdMQgLAIgOAAQgPAAgKgIQAKgIAPAAQAOAAALAIgEg5/gcGQgLAIgOAAQgIAAgIgDIgFgCQgCgCgCgBQACgCACgBQADgCACAAQAIgDAIAAQAAAAABAAQABAAAAAAQAAAAABAAQABAAABAAQAMABAIAHgEg5/gcpQgLAIgOAAQgPAAgKgIQAKgIAPAAQAOAAALAIgEg6xgadQAKgIAPAAQAOAAALAIQgLAIgOAAQgPAAgKgIgEg6xgZ6QAKgIAPAAQAOAAALAIQgLAIgOAAQgIAAgIgDIgFgCQgCgCgCgBgEg6ggYtQABgBgBgBIABgbIAwAAMB0EAAAIAtAAIAAAdQgCAAgCAAQgSAAgNgMQgHgIgDgJQgCgHAAgHQAAgJADgIQADgHAGgGQADgDADgCQgCgBgCgCIgCgBQgGgGgDgHQADgHAGgGQADgDADgCQgDgCgDgCQgGgGgDgHQADgHAGgGQADgDADgCQgDgBgBgCIgCgBQgGgGgDgHQADgHAGgGQADgDADgCQgDgCgDgCQgGgGgDgHQADgHAGgGQADgDADgCQACgBACgCQADgBACgBQAHgDAJAAQAAAAABAAQAAAAABAAQAAAAABAAQABAAABABQALABAJAGQADACACADIABAAQAAABABABQAFAFACAGQAEAIAAAJQAAAKgEAIQgDAHgGAGQgCACgDACQgLAIgOAAQgJAAgHgCIgFgDQgCgBgCgCQAKgIAPAAQAOAAALAIQADACACADIABAAQAAABABABQAFAFACAGQgDAHgGAGQgCACgDACQADACACADQAGAGADAHQgDAHgGAGQgCACgDACQADACACADQAGAGADAHQgDAHgGAGQgMAMgSAAQgSAAgNgMQgGgGgDgHQgDgIAAgKQAAgJADgIQgDgIAAgKQAAgJADgIQgDgIAAgKQAAgJADgIQgDgIAAgKQAAgJADgIQgDgIAAgKQAAgJADgIQgDgIAAgKQAAgJADgIQgDgIAAgKQAAgJADgIQgDgIAAgKQAAgIACgGQADgJAHgHQAJgJALgCEg6ggYqQABgBgBgCAnn4UMgy4AAAQAAgLgBgLIjGgDACkxCIJxC9IjiqPImPAAIkxAAACkxCIkxAAIAAnSIlaAAACk4UIAAHSEBFvgfOIBNAAMAAAA+LQgTAAgTABIgTAAIgUgBgEA7KgeZQAKADAIAIQANAMAAASQAAAKgEAIQgDAHgGAGQgCACgDACQADACACADIABAAQAAABABABQAFAFACAGQAEAIAAAJQAAAKgEAIQAEAIAAAJQAAAKgEAIQgDAHgGAGQgCACgDACQgLAIgOAAQgPAAgKgIQAKgIAPAAQAOAAALAIQADACACADQAGAGADAHQAEAIAAAJQAAAKgEAIQAEAIAAAJQAAAKgEAIQAEAIAAAJQAAAKgEAIQAEAIAAAJQAAASgNANQgLALgPABIAAABIAAAYMgyPAAAEA6lgdNQgDgCgDgCQgGgGgDgHQADgHAGgGQANgNASAAQASAAAMANQAGAGADAHQAEAIAAAJQAAAKgEAIQgDAHgGAGQgCACgDACQADACACADQAGAGADAHQgDAHgGAGQgCACgDACQgLAIgOAAQgJAAgHgCIgFgDQgCgBgCgCQgDgBgBgCIgCgBQgGgGgDgHQADgHAGgGQADgDADgCQgDgCgDgCQgGgGgDgHQADgHAGgGQADgDADgCQAKgIAPAAQAOAAALAIQgLAIgOAAQgPAAgKgIgEA7XgcqQgLAIgOAAQgPAAgKgIQAKgIAPAAQAOAAALAIgEA7XgZ7QgLAIgOAAQgJAAgHgCIgFgDQgCgBgCgCQAKgIAPAAQAOAAALAIgEA7XgaeQgLAIgOAAQgPAAgKgIQAKgIAPAAQAOAAALAIgEA9sgeXIAAgyIBMAAIG3gFEA9sgeXIiigCEA9lgYpIijgDAiNxCIo+CJIDkpbEA9sAe+Is+AAIAAjwIEbAAIIjAAgEA+cAfCIAcgBIAAABIgcAAIgKAAQgTAAgTAAIAAgEEA9sAbOIAAozMAAAgwyEA1JAbOIjdq0IMACBEA+4AfBIHLgDEg1NAbfIDirFIsACBEhGUAfOIAmAAIAAABgEg+kAfKIATAAQATAAATAAEg+kAfKIgTAAMAAAg+LEhFuAfOIHKgEEhFuge8MAAAA+KEA+4gfJMAAAA+K");
	this.shape_120.setTransform(62.65,-38.85);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#666666","#999999"],[0,1],-38.4,0,38.4,0).s().p("AiiFaIjdqzIL/CBIAAIyg");
	this.shape_121.setTransform(419,100.725);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#666666","#999999"],[0,1],-38.4,0,38.4,0).s().p("Al/FiIAApDIL/iAIjiLDg");
	this.shape_122.setTransform(-293.7125,101.575);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#666666","#999999"],[0,1],-31.2,0,31.3,0).s().p("Ak4CKIAAnRIGOAAIDjKOg");
	this.shape_123.setTransform(110.2625,-161.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#666666","#999999"],[0,1],-28.7,0,28.7,0).s().p("Ag7ktIFaAAIAAHRIo9CJg");
	this.shape_124.setTransform(19.75,-164.4);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#666666","#999999"],[0,1],-15.2,0,15.3,0).s().p("AiYDpIAAnRIExAAIAAHRg");
	this.shape_125.setTransform(63.725,-171.25);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["#666666","#999999"],[0,1],-376.1,0,376.1,0).s().p("AIiAbImPAAIkxAAIlaAAMgy4AAAIAAgWIAAgDIAIABQARAAANgLQAIgIADgKMB0DAAAQADAKAHAHQANALASAAIAEAAIAAABIAAAYg");
	this.shape_126.setTransform(64.3,-197.25);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#666666","#999999"],[0,1],-376,0,376.1,0).s().p("Eg59AAbQgDgJgHgHQgMgLgSAAIgLAAIAAgaMB1hAAAIAAAZIgBAAIgLABQgLACgIAJQgHAHgDAJg");
	this.shape_127.setTransform(63.975,-233.425);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#666666","#999999"],[0,1],-371.5,0,371.6,0).s().p("Eg6BACaQACgGAAgHQAAgKgEgIQAEgHAAgKQAAgKgEgHQAEgIAAgKQAAgKgEgHQAEgJAAgJQAAgJgEgIQAEgJAAgJQAAgJgEgHQAEgJAAgJQAAgJgEgJQAEgIAAgJQAAgJgEgJQAEgHAAgKQAAgJgEgJQAEgIAAgJQAAgIgDgHMB0FAAAQgDAHAAAHQAAAKAEAIQgEAIAAAJQAAAKAEAIQgEAIAAAJQAAAKAEAIQgEAIAAAKQAAAJAEAIQgEAIAAAJQAAAJAEAIQgEAIAAAKQAAAJAEAIQgEAIAAAKQAAAJAEAIQgEAIAAAJQAAAKAEAIQgEAIAAAJQAAAIACAGg");
	this.shape_128.setTransform(64.475,-215.35);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["#666666","#999999"],[0,1],-3.8,0,3.9,0).s().p("AgSfGIgTgBMAAAg+KIBLAAMAAAA+KIgmABg");
	this.shape_129.setTransform(512.775,-39.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.lf(["#666666","#999999"],[0,1],-22.9,0,23,0).s().p("Ajk/CIG2gFMAAAA+KIATABInJAEg");
	this.shape_130.setTransform(487.975,-39.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["#666666","#999999"],[0,1],-3.8,0,3.9,0).s().p("AAAfGIglAAIAAgFIAAjwIAAozMAAAgwxIAAgyIBLAAMAAAA+KIgcABg");
	this.shape_131.setTransform(461.225,-39.225);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.lf(["#666666","#999999"],[0,1],-41.4,0,41.5,0).s().p("AmeB4IAAjvIEbAAIIiAAIAADvg");
	this.shape_132.setTransform(415.925,147.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#666666","#999999"],[0,1],-41.4,0,41.5,0).s().p("AmeB4IAAgFIAAjqIIdAAIEgAAIAADvg");
	this.shape_133.setTransform(-290.625,149);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.lf(["#666666","#999999"],[0,1],-3.8,0,3.9,0).s().p("AgSfGIgTAAMAAAg+LIBLAAIAAAmMAAAAw2IAAJEIAADrIgmAAg");
	this.shape_134.setTransform(-335.925,-38.4625);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#666666","#999999"],[0,1],-3.8,0,3.9,0).s().p("Agl/FIBLAAMAAAA+KIgmAAIglABg");
	this.shape_135.setTransform(-387.475,-37.975);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.lf(["#666666","#999999"],[0,1],-22.9,0,23,0).s().p("Ajk/CIG2gFMAAAA+LIATAAInJAEg");
	this.shape_136.setTransform(-360.7375,-38.2625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120}]}).wait(80));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-392.3,-239.7,909.9000000000001,401.7);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.b4 = new lib.frame_floor();
	this.b4.name = "b4";
	this.b4.setTransform(367.3,-91.7,0.0971,0.0971,0,0,0,-178.7,-37.6);

	this.b3 = new lib.frame_floor();
	this.b3.name = "b3";
	this.b3.setTransform(284.85,-91.6,0.0971,0.0971,0,0,0,-178.7,-37.6);

	this.b2 = new lib.frame_floor();
	this.b2.name = "b2";
	this.b2.setTransform(202.35,-91.45,0.0971,0.0971,0,0,0,-179.2,-37.6);

	this.b1 = new lib.frame_floor();
	this.b1.name = "b1";
	this.b1.setTransform(119.95,-91.3,0.0971,0.0971,0,0,0,-179.2,-37.6);

	this.b8 = new lib.frame_floor();
	this.b8.name = "b8";
	this.b8.setTransform(367.3,-52.85,0.0971,0.0971,0,0,0,-178.7,-37.6);

	this.b7 = new lib.frame_floor();
	this.b7.name = "b7";
	this.b7.setTransform(284.85,-52.75,0.0971,0.0971,0,0,0,-178.7,-37.6);

	this.b6 = new lib.frame_floor();
	this.b6.name = "b6";
	this.b6.setTransform(202.35,-52.6,0.0971,0.0971,0,0,0,-179.2,-37.6);

	this.b5 = new lib.frame_floor();
	this.b5.name = "b5";
	this.b5.setTransform(119.95,-52.45,0.0971,0.0971,0,0,0,-179.2,-37.6);

	this.b12 = new lib.frame_floor();
	this.b12.name = "b12";
	this.b12.setTransform(367.3,-14,0.0971,0.0971,0,0,0,-178.7,-37.6);

	this.b11 = new lib.frame_floor();
	this.b11.name = "b11";
	this.b11.setTransform(284.85,-13.9,0.0971,0.0971,0,0,0,-178.7,-37.6);

	this.b10 = new lib.frame_floor();
	this.b10.name = "b10";
	this.b10.setTransform(202.35,-13.75,0.0971,0.0971,0,0,0,-179.2,-37.6);

	this.b9 = new lib.frame_floor();
	this.b9.name = "b9";
	this.b9.setTransform(119.95,-13.6,0.0971,0.0971,0,0,0,-179.2,-37.6);

	this.b16 = new lib.frame_floor();
	this.b16.name = "b16";
	this.b16.setTransform(367.3,24.85,0.0971,0.0971,0,0,0,-178.7,-37.6);

	this.b15 = new lib.frame_floor();
	this.b15.name = "b15";
	this.b15.setTransform(284.85,24.95,0.0971,0.0971,0,0,0,-178.7,-37.6);

	this.b14 = new lib.frame_floor();
	this.b14.name = "b14";
	this.b14.setTransform(202.35,25.1,0.0971,0.0971,0,0,0,-179.2,-37.6);

	this.b13 = new lib.frame_floor();
	this.b13.name = "b13";
	this.b13.setTransform(119.95,25.25,0.0971,0.0971,0,0,0,-179.2,-37.6);

	this.b20 = new lib.frame_floor();
	this.b20.name = "b20";
	this.b20.setTransform(367.3,63.7,0.0971,0.0971,0,0,0,-178.7,-37.6);

	this.b19 = new lib.frame_floor();
	this.b19.name = "b19";
	this.b19.setTransform(284.85,63.8,0.0971,0.0971,0,0,0,-178.7,-37.6);

	this.b18 = new lib.frame_floor();
	this.b18.name = "b18";
	this.b18.setTransform(202.35,63.95,0.0971,0.0971,0,0,0,-179.2,-37.6);

	this.b17 = new lib.frame_floor();
	this.b17.name = "b17";
	this.b17.setTransform(119.95,64.1,0.0971,0.0971,0,0,0,-179.2,-37.6);

	this.b24 = new lib.frame_floor();
	this.b24.name = "b24";
	this.b24.setTransform(367.3,102.55,0.0971,0.0971,0,0,0,-178.7,-37.6);

	this.b23 = new lib.frame_floor();
	this.b23.name = "b23";
	this.b23.setTransform(284.85,102.65,0.0971,0.0971,0,0,0,-178.7,-37.6);

	this.b22 = new lib.frame_floor();
	this.b22.name = "b22";
	this.b22.setTransform(202.35,102.8,0.0971,0.0971,0,0,0,-179.2,-37.6);

	this.b21 = new lib.frame_floor();
	this.b21.name = "b21";
	this.b21.setTransform(119.95,102.95,0.0971,0.0971,0,0,0,-179.2,-37.6);

	this.b28 = new lib.frame_floor();
	this.b28.name = "b28";
	this.b28.setTransform(367.3,141.4,0.0971,0.0971,0,0,0,-178.7,-37.6);

	this.b27 = new lib.frame_floor();
	this.b27.name = "b27";
	this.b27.setTransform(284.85,141.5,0.0971,0.0971,0,0,0,-178.7,-37.6);

	this.b26 = new lib.frame_floor();
	this.b26.name = "b26";
	this.b26.setTransform(202.35,141.65,0.0971,0.0971,0,0,0,-179.2,-37.6);

	this.b25 = new lib.frame_floor();
	this.b25.name = "b25";
	this.b25.setTransform(119.95,141.8,0.0971,0.0971,0,0,0,-179.2,-37.6);

	this.b32 = new lib.frame_floor();
	this.b32.name = "b32";
	this.b32.setTransform(367.3,180.25,0.0971,0.0971,0,0,0,-178.7,-37.6);

	this.b31 = new lib.frame_floor();
	this.b31.name = "b31";
	this.b31.setTransform(284.85,180.35,0.0971,0.0971,0,0,0,-178.7,-37.6);

	this.b30 = new lib.frame_floor();
	this.b30.name = "b30";
	this.b30.setTransform(202.35,180.5,0.0971,0.0971,0,0,0,-179.2,-37.6);

	this.b29 = new lib.frame_floor();
	this.b29.name = "b29";
	this.b29.setTransform(119.95,180.65,0.0971,0.0971,0,0,0,-179.2,-37.6);

	this.b36 = new lib.frame_floor();
	this.b36.name = "b36";
	this.b36.setTransform(367.3,219.1,0.0971,0.0971,0,0,0,-178.7,-37.6);

	this.b35 = new lib.frame_floor();
	this.b35.name = "b35";
	this.b35.setTransform(284.85,219.2,0.0971,0.0971,0,0,0,-178.7,-37.6);

	this.b34 = new lib.frame_floor();
	this.b34.name = "b34";
	this.b34.setTransform(202.35,219.35,0.0971,0.0971,0,0,0,-179.2,-37.6);

	this.b33 = new lib.frame_floor();
	this.b33.name = "b33";
	this.b33.setTransform(119.95,219.5,0.0971,0.0971,0,0,0,-179.2,-37.6);

	this.b40 = new lib.frame_floor();
	this.b40.name = "b40";
	this.b40.setTransform(367.3,257.95,0.0971,0.0971,0,0,0,-178.7,-37.6);

	this.b39 = new lib.frame_floor();
	this.b39.name = "b39";
	this.b39.setTransform(284.85,258.05,0.0971,0.0971,0,0,0,-178.7,-37.6);

	this.b38 = new lib.frame_floor();
	this.b38.name = "b38";
	this.b38.setTransform(202.35,258.2,0.0971,0.0971,0,0,0,-179.2,-37.6);

	this.b37 = new lib.frame_floor();
	this.b37.name = "b37";
	this.b37.setTransform(119.95,258.35,0.0971,0.0971,0,0,0,-179.2,-37.6);

	this.b44 = new lib.frame_floor();
	this.b44.name = "b44";
	this.b44.setTransform(367.3,296.8,0.0971,0.0971,0,0,0,-178.7,-37.6);

	this.b43 = new lib.frame_floor();
	this.b43.name = "b43";
	this.b43.setTransform(284.85,296.9,0.0971,0.0971,0,0,0,-178.7,-37.6);

	this.b42 = new lib.frame_floor();
	this.b42.name = "b42";
	this.b42.setTransform(202.35,297.05,0.0971,0.0971,0,0,0,-179.2,-37.6);

	this.b41 = new lib.frame_floor();
	this.b41.name = "b41";
	this.b41.setTransform(119.95,297.2,0.0971,0.0971,0,0,0,-179.2,-37.6);

	this.b48 = new lib.frame_floor();
	this.b48.name = "b48";
	this.b48.setTransform(367.3,335.65,0.0971,0.0971,0,0,0,-178.7,-37.6);

	this.b47 = new lib.frame_floor();
	this.b47.name = "b47";
	this.b47.setTransform(284.85,335.75,0.0971,0.0971,0,0,0,-178.7,-37.6);

	this.b46 = new lib.frame_floor();
	this.b46.name = "b46";
	this.b46.setTransform(202.35,335.9,0.0971,0.0971,0,0,0,-179.2,-37.6);

	this.b45 = new lib.frame_floor();
	this.b45.name = "b45";
	this.b45.setTransform(119.95,336.05,0.0971,0.0971,0,0,0,-179.2,-37.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b45},{t:this.b46},{t:this.b47},{t:this.b48},{t:this.b41},{t:this.b42},{t:this.b43},{t:this.b44},{t:this.b37},{t:this.b38},{t:this.b39},{t:this.b40},{t:this.b33},{t:this.b34},{t:this.b35},{t:this.b36},{t:this.b29},{t:this.b30},{t:this.b31},{t:this.b32},{t:this.b25},{t:this.b26},{t:this.b27},{t:this.b28},{t:this.b21},{t:this.b22},{t:this.b23},{t:this.b24},{t:this.b17},{t:this.b18},{t:this.b19},{t:this.b20},{t:this.b13},{t:this.b14},{t:this.b15},{t:this.b16},{t:this.b9},{t:this.b10},{t:this.b11},{t:this.b12},{t:this.b5},{t:this.b6},{t:this.b7},{t:this.b8},{t:this.b1},{t:this.b2},{t:this.b3},{t:this.b4}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(99.3,-111.3,335.59999999999997,466.7);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.bf = new lib.frame_floor();
	this.bf.name = "bf";
	this.bf.setTransform(285.6,251.5,0.6292,0.6292,0,0,0,62.6,161);

	this.timeline.addTween(cjs.Tween.get(this.bf).to({regY:161.1,skewX:3.9995},19).to({regY:161,skewX:0},20).to({regY:161.1,skewX:-3.9995,x:285.55},20).to({regY:161,skewX:0,x:285.6},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.9,-1,607.1,253.6);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.frame = new lib.Symbol7("synched",0);
	this.frame.name = "frame";
	this.frame.setTransform(77.9,282.65,1,1,0,0,0,271.9,391.2);

	this.timeline.addTween(cjs.Tween.get(this.frame).to({skewX:4.0005,y:282.7},19,cjs.Ease.none).to({skewX:0,y:282.65},20).to({skewX:-4.0005,x:77.95,y:282.7},20).to({skewX:0},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.6,-220.8,407.4,468.70000000000005);


// stage content:
(lib.bracedframe = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.building.stop()
		this.bracedframe.bf.stop();
		this.bracedframe.stop();
		this.animCtrl_Btn.txt.text = "Play";
		this.animCtrl_Btn.addEventListener("click", animCtrl_Btnfunction.bind(this));
		
		for (var i = 1; i <= 50; i++) {
			this.building.frame["b" + i].stop();
		}
		
		//create function to start/stop animation and toggle button text
		function animCtrl_Btnfunction() {
			if (this.animCtrl_Btn.txt.text == "Play") {
				this.animCtrl_Btn.txt.text = "Pause";
				this.building.play()
				this.bracedframe.bf.play();
				this.bracedframe.play();
				for (var i = 1; i <= 104; i++) {
					this.building.frame["b" + i].play();
				}
		
			} else {
		
				this.animCtrl_Btn.txt.text = "Play";
				this.building.stop()
				this.bracedframe.bf.stop();
				this.bracedframe.stop();
				for (var i = 1; i <= 50; i++) {
					this.building.frame["b" + i].stop();
				}
		
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_2
	this.animCtrl_Btn = new lib.StartBtn();
	this.animCtrl_Btn.name = "animCtrl_Btn";
	this.animCtrl_Btn.setTransform(1131.6,663.55,1.0853,1.0853);
	new cjs.ButtonHelper(this.animCtrl_Btn, 0, 1, 2, false, new lib.StartBtn(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#7D7D7E").ss(4,1,1).p("EhVZAAAMCqzAAA");
	this.shape.setTransform(644.075,635.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.animCtrl_Btn}]}).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(1.7,21.5,0.5,0.5);

	this.bracedframe = new lib.Symbol1();
	this.bracedframe.name = "bracedframe";
	this.bracedframe.setTransform(879.95,511.1,1,1,0,0,0,285.6,125.8);

	this.building = new lib.Symbol11();
	this.building.name = "building";
	this.building.setTransform(283.75,636.8,1.182,1.182,0,0,0,73.1,246.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.building},{t:this.bracedframe},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(641.7,381.5,639,296);
// library properties:
lib.properties = {
	id: '1F3AB136B6024ECBB9F348D673F4F391',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_7.png?1637849015367", id:"CachedBmp_7"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1F3AB136B6024ECBB9F348D673F4F391'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;