// Get the job ID from the URL
const params = new URLSearchParams(window.location.search);
const jobId = parseInt(params.get("id"));

// Find the job from the jobs array (must be defined in jobs.js)
const job = jobs.find(j => j.id === jobId);

// Display job details on the page
if (job) {
  document.getElementById("job-title").textContent = job.title;
  document.getElementById("job-company").textContent = job.company;
  document.getElementById("job-location").textContent = job.location;
  document.getElementById("job-type").textContent = job.type;
  document.getElementById("job-salary").textContent = job.salary;
  document.getElementById("job-category").textContent = job.category;
  document.getElementById("job-desc").textContent = job.description;

  const list = document.getElementById("job-reqs");
  job.requirements.forEach(req => {
    const li = document.createElement("li");
    li.textContent = req;
    list.appendChild(li);
  });
} else {
  document.querySelector(".job-card").innerHTML = "<h2>Job not found</h2>";
}
