    # The configuration for the `remote` backend.
   terraform {
  required_providers {
    google = {
      source = "hashicorp/google"
    }
  }
}

provider "google" {

  project = "cloud-resume-production"
 
}


   resource "google_storage_bucket" "portfolio-static-site" {
 name          = "okiportfolio"
 project       = "cloud-resume-production"
 location      = "US"
 force_destroy = true
}
