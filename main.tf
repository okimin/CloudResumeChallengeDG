    # The configuration for the `remote` backend.
    terraform {
      backend "remote" {
        # The name of your Terraform Cloud organization.
        organization = "portfolio-organization"

        # The name of the Terraform Cloud workspace to store Terraform state files in.
        workspaces {
          name = "portfolio-workspace"
        }
      }
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
