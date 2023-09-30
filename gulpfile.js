var gulp = require('gulp'),
    watch = require("gulp-watch"),
    prefixer = require("gulp-autoprefixer"),
    terser = require('gulp-terser'),
    concat = require("gulp-concat"),
    sass = require('gulp-sass')(require('sass')),
    cleanCSS = require("gulp-clean-css"),
    sourcemaps = require("gulp-sourcemaps"),
    rename = require("gulp-rename")
    // rimraf = require("gulp-rimraf")
;

var path = {
    src: {
        scss: '_develop/scss/',
        js: '_develop/_js/',
        npm: 'node_modules/'
    },
    dest: {
        css: '_build/css/',
        js: '_build/js/'
    },
    watch: {
        scss: '_develop/scss/',
        js: '_develop/_js/'
    }
};

/*----------  SCSS  ----------*/

gulp.task('main-scss', function(){
    return gulp.src(path.src.scss + 'main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefixer({
            overrideBrowserslist: ['last 4 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(sourcemaps.write('.', {
            addComment: true,
            mapFile: function(mapFilePath) {
                return mapFilePath.replace('.scss', '.map');
            }
        }))
        .pipe(gulp.dest(path.dest.css));
    // .pipe(browserSync.reload({
    //     stream: true
    // }));
});

/*----------  JS  ----------*/
gulp.task('app-js', function(){
    return gulp.src([
        path.src.js + 'About.js',
        path.src.js + 'Sounds.js',
        path.src.js + 'Intro.js',
        path.src.js + 'ChoiceCategory.js',
        path.src.js + 'Category.js',
        path.src.js + 'Question.js',
        path.src.js + 'ArrowsAll.js',
        path.src.js + 'Settings.js',
        path.src.js + 'questCitizen/citizenCategory.js',
        path.src.js + 'questCitizen/loadQuestCitizen.js',
        path.src.js + 'questCitizen/lockSubQuestCitizen.js',
        path.src.js + 'questCitizen/questCitizenCat_1.js',
        path.src.js + 'questCitizen/questCitizenCat_2.js',
        path.src.js + 'questCitizen/questCitizenCat_3.js',
        path.src.js + 'questCitizen/questCitizenCat_4.js',
        path.src.js + 'questCitizen/questCitizenCat_5.js',
        path.src.js + 'questCitizen/questCitizenCat_6.js',
        path.src.js + 'questCitizen/questCitizenCat_7.js',
        path.src.js + 'questCitizen/questCitizenCat_8.js',
        path.src.js + 'questCitizen/questCitizenCat_9.js',
        path.src.js + 'questCitizen/questCitizenCat_10.js',
        path.src.js + 'questChicherone/chicheroneCategory.js',
        path.src.js + 'questChicherone/loadQuestChicherone.js',
        path.src.js + 'questChicherone/lockSubQuestChicherone.js',
        path.src.js + 'questChicherone/questChicheroneCat_1.js',
        path.src.js + 'questChicherone/questChicheroneCat_2.js',
        path.src.js + 'questChicherone/questChicheroneCat_3.js',
        path.src.js + 'questChicherone/questChicheroneCat_4.js',
        path.src.js + 'questChicherone/questChicheroneCat_5.js',
        path.src.js + 'questChicherone/questChicheroneCat_6.js',
        path.src.js + 'questChicherone/questChicheroneCat_7.js',
        path.src.js + 'questChicherone/questChicheroneCat_8.js',
        path.src.js + 'questChicherone/questChicheroneCat_9.js',
        path.src.js + 'questChicherone/questChicheroneCat_10.js',
        path.src.js + 'questKraeved/kraevedCategory.js',
        path.src.js + 'questKraeved/loadQuestKraeved.js',
        path.src.js + 'questKraeved/lockSubQuestKraeved.js',
        path.src.js + 'questKraeved/questKraevedCat_1.js',
        path.src.js + 'questKraeved/questKraevedCat_2.js',
        path.src.js + 'questKraeved/questKraevedCat_3.js',
        path.src.js + 'questKraeved/questKraevedCat_4.js',
        path.src.js + 'questKraeved/questKraevedCat_5.js',
        path.src.js + 'questKraeved/questKraevedCat_6.js',
        path.src.js + 'questKraeved/questKraevedCat_7.js',
        path.src.js + 'questKraeved/questKraevedCat_8.js',
        path.src.js + 'questKraeved/questKraevedCat_9.js',
        path.src.js + 'questKraeved/questKraevedCat_10.js',
        path.src.js + 'app.js'
    ])
        .pipe(concat('app.js'))
        .pipe(terser())
        .pipe(rename({suffix: "-min"}))
        .pipe(gulp.dest(path.dest.js));
});

gulp.task('vendor-js', function(){
    return gulp.src([
        path.src.npm + 'gsap/dist/' + 'gsap.js',
        path.src.npm + 'gsap/dist/' + 'ScrollToPlugin.js',
        path.src.npm + 'gsap/dist/' + 'ScrollTrigger.js',
        path.src.npm + 'imagesloaded/' + 'imagesloaded.pkgd.js',
        // path.src.npm + 'locomotive-scroll/dist/' + 'locomotive-scroll.js',
        // path.src.npm + 'plyr/dist/' + 'plyr.js',
        // path.src.js + 'jquery.requestAnimationFrame.js',
        // path.src.js + 'jquery.mousewheel.js',
        // path.src.npm + 'magnific-popup/dist/' + 'jquery.magnific-popup.js',
        path.src.js + 'vendor.js'
    ])
        .pipe(concat('vendor.js'))
        .pipe(terser())
        .pipe(rename({suffix: "-min"}))
        .pipe(gulp.dest(path.dest.js));
});

/*----------  Watch  ----------*/

gulp.task('watch', function() {
    gulp.watch(path.watch.scss + '*.scss', gulp.series('main-scss'));
    gulp.watch(path.watch.js + 'vendor.js', gulp.series('vendor-js'));
    gulp.watch([path.watch.js + 'app.js',
        path.watch.js + 'Sounds.js',
        path.watch.js + 'Intro.js',
        path.watch.js + 'Category.js',
        path.watch.js + 'ChoiceCategory.js',
        path.watch.js + 'Question.js',
        path.watch.js + 'Quest.js',
        path.watch.js + 'ArrowsAll.js',
        path.watch.js + 'About.js',
        path.watch.js + 'Settings.js',
        path.watch.js + 'questCitizen/citizenCategory.js',
        path.watch.js + 'questCitizen/loadQuestCitizen.js',
        path.watch.js + 'questCitizen/lockSubQuestCitizen.js',
        path.watch.js + 'questCitizen/questCitizenCat_1.js',
        path.watch.js + 'questCitizen/questCitizenCat_2.js',
        path.watch.js + 'questCitizen/questCitizenCat_3.js',
        path.watch.js + 'questCitizen/questCitizenCat_4.js',
        path.watch.js + 'questCitizen/questCitizenCat_5.js',
        path.watch.js + 'questCitizen/questCitizenCat_6.js',
        path.watch.js + 'questCitizen/questCitizenCat_7.js',
        path.watch.js + 'questCitizen/questCitizenCat_8.js',
        path.watch.js + 'questCitizen/questCitizenCat_9.js',
        path.watch.js + 'questCitizen/questCitizenCat_10.js',
        path.watch.js + 'questChicherone/chicheroneCategory.js',
        path.watch.js + 'questChicherone/loadQuestChicherone.js',
        path.watch.js + 'questChicherone/lockSubQuestChicherone.js',
        path.watch.js + 'questChicherone/questChicheroneCat_1.js',
        path.watch.js + 'questChicherone/questChicheroneCat_2.js',
        path.watch.js + 'questChicherone/questChicheroneCat_3.js',
        path.watch.js + 'questChicherone/questChicheroneCat_4.js',
        path.watch.js + 'questChicherone/questChicheroneCat_5.js',
        path.watch.js + 'questChicherone/questChicheroneCat_6.js',
        path.watch.js + 'questChicherone/questChicheroneCat_7.js',
        path.watch.js + 'questChicherone/questChicheroneCat_8.js',
        path.watch.js + 'questChicherone/questChicheroneCat_9.js',
        path.watch.js + 'questChicherone/questChicheroneCat_10.js',
        path.watch.js + 'questKraeved/kraevedCategory.js',
        path.watch.js + 'questKraeved/loadQuestKraeved.js',
        path.watch.js + 'questKraeved/lockSubQuestKraeved.js',
        path.watch.js + 'questKraeved/questKraevedCat_1.js',
        path.watch.js + 'questKraeved/questKraevedCat_2.js',
        path.watch.js + 'questKraeved/questKraevedCat_3.js',
        path.watch.js + 'questKraeved/questKraevedCat_4.js',
        path.watch.js + 'questKraeved/questKraevedCat_5.js',
        path.watch.js + 'questKraeved/questKraevedCat_6.js',
        path.watch.js + 'questKraeved/questKraevedCat_7.js',
        path.watch.js + 'questKraeved/questKraevedCat_8.js',
        path.watch.js + 'questKraeved/questKraevedCat_9.js',
        path.watch.js + 'questKraeved/questKraevedCat_10.js'
    ], gulp.series('app-js'));
    // gulp.watch(path.watch.js + 'jgrowl.js', gulp.series('jgrowl-js'));

    // gulp.watch(path.dest.css + '/js/**/*.js', browserSync.reload);
});

// gulp.task("default", ["main-scss", "main-js", "watch"]);