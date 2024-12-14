---@param time number? time in seconds for timer bar to run.
---@param text Title of the timer bar.
---@param cb Callback to run when finished.
function lib.getDiseaseLabel(type)
    local label = 'Unknown'
    if type == 'addiction' then
        label = 'Drug Addiction'
    elseif type == 'angelic' then
        label = 'Angelic'
    elseif type == 'vampirism' then
        label = 'Vampirism'
    elseif type == 'lycanthropy' then
        label = 'Lycanthropy'
    elseif type == 'zombieism' then
        label = 'Zombieism'
    end
    return label
end

return lib.getDiseaseLabel
