function getTimeAgo(timestamp) {
    const now = moment();
    const inputDate = moment(timestamp);
  
    const diffDuration = moment.duration(now.diff(inputDate));
  
    if (diffDuration.asYears() >= 1) {
      return '1 year ago';
    } else if (diffDuration.asMonths() >= 1) {
      return '1 month ago';
    } else if (diffDuration.asDays() >= 1) {
      return '1 day ago';
    } else if (diffDuration.asHours() >= 1) {
      return `${Math.floor(diffDuration.asHours())} hours ago`;
    } else if (diffDuration.asMinutes() >= 1) {
      return `${Math.floor(diffDuration.asMinutes())} minutes ago`;
    } else {
      return `${Math.floor(diffDuration.asSeconds())} seconds ago`;
    }
}


export const getTimeAgo = getTimeAgo