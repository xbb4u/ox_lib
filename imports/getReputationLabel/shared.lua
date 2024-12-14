function lib.getReputationLabel(type)
    local label = 'Unknown'
    if type == 'criminal' then
        label = 'Criminal'
    elseif type == 'civilian' then
        label = 'Civilian'
    elseif type == 'prison' then
        label = 'Prison'
    elseif type == 'responder' then
        label = 'First Responder'
    end
    return label
end

return lib.getReputationLabel
