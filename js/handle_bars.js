export class handleHeightBars {

    static handleBarRepo(valueRepo, bar) {

        if(valueRepo >= 2 && valueRepo <= 9) {
            bar.querySelector('.repo-bar').style.height = "30px"
        }


        if (valueRepo == 10) {
            bar.querySelector('.repo-bar').style.height = "60px"
        } else if (valueRepo > 10 && valueRepo <= 24) {
            bar.querySelector('.repo-bar').style.height = "95px"
        }

        if (valueRepo == 25) {
            bar.querySelector('.repo-bar').style.height = "125px"
        } else if (valueRepo > 25 && valueRepo <= 49) {
            bar.querySelector('.repo-bar').style.height = "155px"
        }

        if (valueRepo == 50) {
            bar.querySelector('.repo-bar').style.height = "180px"
        } else if (valueRepo > 50 && valueRepo <= 74) {
            bar.querySelector('.repo-bar').style.height = "215px"
        }

        if (valueRepo == 75) {
            bar.querySelector('.repo-bar').style.height = "240px"
        } else if (valueRepo > 75 && valueRepo <= 99) {
            bar.querySelector('.repo-bar').style.height = "275px"
        }

        if (valueRepo >= 100) {
            bar.querySelector('.repo-bar').style.height = "300px"
        }
    }

    static handleBarFollow(valueFollow, bar) {

        if(valueFollow >= 2 && valueFollow <= 9) {
            bar.querySelector('.follower-bar').style.height = "30px"
        }

        if (valueFollow == 10) {
            bar.querySelector('.follower-bar').style.height = "60px"
        } else if (valueFollow > 10 && valueFollow <= 24) {
            bar.querySelector('.follower-bar').style.height = "95px"
        }

        if (valueFollow == 25) {
            bar.querySelector('.follower-bar').style.height = "125px"
        } else if (valueFollow > 25 && valueFollow <= 49) {
            bar.querySelector('.follower-bar').style.height = "155px"
        }

        if (valueFollow == 50) {
            bar.querySelector('.follower-bar').style.height = "180px"
        } else if (valueFollow > 50 && valueFollow <= 74) {
            bar.querySelector('.follower-bar').style.height = "215px"
        }

        if (valueFollow == 75) {
            bar.querySelector('.follower-bar').style.height = "240px"
        } else if (valueFollow > 75 && valueFollow <= 99) {
            bar.querySelector('.follower-bar').style.height = "275px"
        }

        if (valueFollow >= 100) {
            bar.querySelector('.follower-bar').style.height = "300px"
        }
    }
}
