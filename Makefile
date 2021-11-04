dev-start:
	@docker-compose up --detach

dev-stop:
	@docker-compose down

dev-restart: dev-stop dev-start

ibm-login:
	@ibmcloud login -a https://cloud.ibm.com -u $(USER) -p ${PASSWORD} --profile ${PROFILE_ID}

cr-login:
	@ibmcloud cr login

push-image:
	@docker push de.icr.io/$(NAMESPACE)/$(REPOSITORY):$(TAG)