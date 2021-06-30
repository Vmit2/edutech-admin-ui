import { buildUsersApiParams } from '../../../services/api/helpers/buildUsersApiParams';
export function urlParamsToApi(urlParams) {
  const { page } = urlParams;

  return buildUsersApiParams({
    page,
    per_page: 25,
  })
}
