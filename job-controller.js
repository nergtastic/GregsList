function JobController() {
    let jobService = new JobService()

    this.setup = function () {
        let template = `
        <form class="form-group greg-form" onsubmit="app.controllers.jobController.makeJob(event)">
            <label for="company" style="margin: 10px 0px 0px 25px;">Company</label>
            <input type="text" name="company" class="form-control-sm" style="margin: 10px 0px 0px 25px; display: block";>
            <label for="jobTitle" style="margin: 10px 0px 0px 25px;">Job Title</label>
            <input type="text" name="jobTitle" class="form-control-sm" style="margin: 10px 0px 0px 25px; display: block";>
            <label for="hours" style="margin: 10px 0px 0px 25px;">Hours</label>
            <input type="number" name="hours" class="form-control-sm" style="margin: 10px 0px 0px 25px; display: block";>
            <label for="rate" style="margin: 10px 0px 0px 25px;">Rate</label>
            <input type="number" name="rate" class="form-control-sm" style="margin: 10px 0px 0px 25px; display: block";>
            <label for="description" style="margin: 10px 0px 0px 25px;">Description</label>
            <input type="text" name="description" class="form-control-sm" style="margin: 10px 0px 0px 25px; display: block";>
            <button type="submit" style="margin: 25px;">Post Jobs</button>
        </form>
        <div id="jobs" class="col-9"></div>
        `
    document.getElementById('maker').innerHTML = template
    jobService.loadJobs(draw)
    
    }

    function draw(){
        let jobs = jobService.getJobs()
        let template = ""

        for(let i=0; i < jobs.length; i++){
            const job = jobs[i];
            template += `
            <div class="job-details">
                <p>Company: ${job.company}</p>
                <p>Job Title: ${job.jobTitle}</p>
                <p>Hours: ${job.hours}</p>
                <p>Rate: ${job.rate}</p>
                <p style="width: 250px;">Description: ${job.description}</p>
            </div>
            `
        }
        document.getElementById('jobs').innerHTML = template
    }

    this.makeJob = function (event) {
        event.preventDefault();
        let formData = event.target
        jobService.makeJob(formData, draw)
        formData.reset()
        // let keys = Object.keys(formData)
        // formData.company.value = ""
        // formData.jobTitle.value = ""
        // formData.imgUrl.value = ""
        // formData.hours.value = ""
        // formData.rate.value = ""
        // formData.description.value = ""
        // draw()
    }
}