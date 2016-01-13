module TimeTrackersHelper
    def issue_from_id(issue_id)
        Issue.find(issue_id)
    end

    def user_from_id(user_id)
        User.find(user_id)
    end
end
