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

    # An example resource that does nothing.
    resource "null_resource" "example" {
      triggers = {
        value = "A example resource that does nothing!"
      }
    }

   resource "google_storage_bucket" "portfolio-static-site" {
 name          = "okiportfolio"
 project       = "cloud-resume-production"
 location      = "US"
 force_destroy = true
}
