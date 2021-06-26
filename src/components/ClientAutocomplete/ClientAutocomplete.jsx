import { t } from '@lingui/macro'
import debounce from 'lodash/debounce'
import PropTypes from 'prop-types'
import React, { useMemo, useState } from 'react'
import { useClientAutocomplete } from 'src/components/ClientAutocomplete/useClientAutocomplete'
import SelectAutocomplete from 'src/components/SelectAutocomplete'

function ClientAutocomplete({ businessId, name, value, onChange, ...props }) {
  const [inputValue, setInputValue] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const clients = useClientAutocomplete(businessId, {
    params: { search: searchValue },
  })

  const options = useMemo(() => (clients.data ? clients.data : []), [clients])

  // Create a debounced function to delay updating the search value while the
  // user is actively typing.
  const updateSearchValue = useMemo(() => {
    return debounce((newSearchValue) => {
      setSearchValue(newSearchValue)
    }, 300)
  }, [])

  const buildFakeChangeEvent = (newValue) => {
    return {
      target: { name, value: newValue },
    }
  }

  const handleChange = (_, newValue) => {
    setInputValue('')
    updateSearchValue('')

    onChange(buildFakeChangeEvent(newValue), newValue)
  }

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue)

    updateSearchValue(newInputValue)
  }

  return (
    <SelectAutocomplete
      autoComplete
      autoHighlight
      filterOptions={(option) => option}
      getOptionLabel={(option) => option.user.name}
      getOptionSelected={(option, val) => option.id === val.id}
      inputValue={inputValue}
      loading={clients.status === 'loading'}
      loadingText={t`Loading...`}
      name={name}
      noOptionsText={t`No clients found.`}
      options={options}
      value={value}
      onChange={handleChange}
      onInputChange={handleInputChange}
      {...props}
    />
  )
}

ClientAutocomplete.propTypes = {
  businessId: PropTypes.number.isRequired,
  name: PropTypes.string,
  value: PropTypes.oneOf([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object),
  ]),
  onChange: PropTypes.func.isRequired,
}

export default ClientAutocomplete
